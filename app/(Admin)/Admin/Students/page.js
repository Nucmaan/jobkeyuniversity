"use client";
import React, { useState, useEffect, useCallback } from "react";
import { FaPlus, FaEdit, FaSearch, FaFilter, FaSort, FaTrash, FaFileExcel } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";

export default function Page() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterFaculty, setFilterFaculty] = useState("all");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [currentPage, setCurrentPage] = useState(1);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState(null);
  const [showDeleteAllConfirm, setShowDeleteAllConfirm] = useState(false);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [showDeleteSelectedConfirm, setShowDeleteSelectedConfirm] = useState(false);
  const itemsPerPage = 10;
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const backendUrl = "https://backendjobkey.onrender.com";

  const fetchStudents = useCallback(async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/v1/hemis/getAllStudents`,{
        withCredentials: true,
      });
      
      // Access the students array from the response
      const studentsData = response.data?.students || [];
      
      const sortedStudents = studentsData.sort((a, b) => {
        const dateA = new Date(a.updatedAt || a.createdAt);
        const dateB = new Date(b.updatedAt || b.createdAt);
        return dateB - dateA;
      });
      setStudents(sortedStudents);
    } catch (error) {
      console.error('Error fetching students:', error);
      toast.error("Failed to fetch students");
      setStudents([]);
    } finally {
      setLoading(false);
    }
  }, [backendUrl]);

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  const uniqueFaculties = [...new Set(students.map(student => student.faculty))];

  // Sorting function
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Filter and sort students
  const filteredStudents = students
    .filter(student => {
      const searchQuery = searchTerm.toLowerCase();
      const matchesSearch = 
        (student.studentName?.toLowerCase() || '').includes(searchQuery) ||
        (student.hemisNo?.toLowerCase() || '').includes(searchQuery) ||
        (student.studentID?.toString().toLowerCase() || '').includes(searchQuery);
      const matchesStatus = filterStatus === "all" || student.status === filterStatus;
      const matchesFaculty = filterFaculty === "all" || student.faculty === filterFaculty;
      return matchesSearch && matchesStatus && matchesFaculty;
    })
    .sort((a, b) => {
      if (!sortConfig.key) {
        const dateA = new Date(a.updatedAt || a.createdAt);
        const dateB = new Date(b.updatedAt || b.createdAt);
        return dateB - dateA;
      }
      
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });

  // Get unique faculties with counts
  const facultiesWithCount = students.reduce((acc, student) => {
    if (student.faculty) {
      acc[student.faculty] = (acc[student.faculty] || 0) + 1;
    }
    return acc;
  }, {});

  // Status options with counts
  const statusCounts = students.reduce((acc, student) => {
    if (student.status) {
      acc[student.status] = (acc[student.status] || 0) + 1;
    }
    return acc;
  }, {});

  const handleDelete = async (studentId) => {
    setStudentToDelete(studentId);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`${backendUrl}/api/v1/hemis/deleteStudent/${studentToDelete}`);
      await fetchStudents();
      toast.success("Student deleted successfully");
    } catch (error) {
      console.error('Error deleting student:', error);
      toast.error(error.response?.data?.message || "Failed to delete student");
    } finally {
      setShowDeleteConfirm(false);
      setStudentToDelete(null);
    }
  };

  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);
  
  const getVisiblePageNumbers = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];
    let l;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        range.push(i);
      }
    }

    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  const paginatedStudents = filteredStudents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file type
      if (file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
          file.type === "application/vnd.ms-excel" ||
          file.name.endsWith('.xlsx') ||
          file.name.endsWith('.xls')) {
        
        // Show file size information
        const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
        console.log('Selected file:', {
          name: file.name,
          type: file.type,
          size: `${fileSizeMB}MB`
        });

        setSelectedFile(file);
        toast.success(`File selected successfully (${fileSizeMB}MB)`);
      } else {
        toast.error("Please select a valid Excel file (.xlsx or .xls)");
        e.target.value = null;
      }
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      toast.error("Please select a file");
      return;
    }

    // Show file size information
    const fileSizeMB = (selectedFile.size / (1024 * 1024)).toFixed(2);
    console.log(`File size: ${fileSizeMB}MB`);
    const preparingToast = toast.loading(`Preparing to upload file (${fileSizeMB}MB)`);

    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          setUploadLoading(true);
          toast.dismiss(preparingToast);
          const formData = new FormData();
          formData.append('file', selectedFile);

          // Create a unique ID for this upload
          const uploadId = Date.now();
          console.log('Starting upload with ID:', uploadId);
          console.log('Making request to:', `${backendUrl}/api/v1/hemis/uploadOneTime`);
          
          // Show initial progress toast
          const loadingToast = toast.loading('Preparing to process file...');
          
          let lastProgress = 0;
          const response = await axios.post(
            `${backendUrl}/api/v1/hemis/uploadOneTime`,
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
                'Upload-ID': uploadId
              },
              withCredentials: true,
              timeout: 0, // No timeout
              maxContentLength: Infinity, // No content length limit
              maxBodyLength: Infinity, // No body length limit
              onUploadProgress: (progressEvent) => {
                const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                
                // Only update if progress has changed by at least 1%
                if (percentCompleted > lastProgress) {
                  lastProgress = percentCompleted;
                  console.log(`Upload progress [${uploadId}]:`, percentCompleted, '%');
                  toast.loading(`Uploading file: ${percentCompleted}%\nPlease wait while processing...`, { 
                    id: loadingToast,
                    duration: Infinity
                  });
                }

                // When upload reaches 100%, show processing message
                if (percentCompleted === 100) {
                  console.log(`Upload completed [${uploadId}], waiting for server processing...`);
                  toast.loading('File uploaded, processing large dataset...\nThis may take several minutes for large files...', { 
                    id: loadingToast,
                    duration: Infinity
                  });
                }
              }
            }
          );

          console.log(`Upload response [${uploadId}]:`, response.data);
          toast.dismiss(loadingToast);

          if (response.data) {
            const successMessage = `Upload completed successfully!\nInserted: ${response.data.inserted}\nUpdated: ${response.data.updated}`;
            console.log(successMessage);
            toast.success(successMessage);
            setShowUploadModal(false);
            setSelectedFile(null);
            await fetchStudents();
          }
        } catch (error) {
          console.error("Upload error details:", {
            message: error.message,
            response: error.response?.data,
            status: error.response?.status,
            code: error.code
          });

          // Handle specific error cases
          if (error.response?.data?.message) {
            const errorMsg = `Upload failed: ${error.response.data.message}`;
            console.error(errorMsg);
            toast.error(errorMsg);
          } else if (error.response?.status === 500) {
            const errorMsg = "Server error while processing students. This might be due to:\n- File size too large\n- Server timeout\n- Invalid data format\nPlease try with a smaller batch or contact support.";
            console.error(errorMsg);
            toast.error(errorMsg);
          } else if (error.code === 'ECONNABORTED') {
            const errorMsg = "Upload timeout - Server took too long to process. Try:\n1. Reducing file size\n2. Splitting into smaller batches\n3. Contact support for assistance";
            console.error(errorMsg);
            toast.error(errorMsg);
          } else {
            const errorMsg = `Upload failed: ${error.message}. Please check your connection and try again.`;
            console.error(errorMsg);
            toast.error(errorMsg);
          }
        } finally {
          setUploadLoading(false);
        }
      };

      reader.onerror = (error) => {
        console.error("File reading error:", error);
        toast.error("Error reading the file. Please try again.");
        setUploadLoading(false);
      };

      reader.readAsArrayBuffer(selectedFile);
    } catch (error) {
      console.error("File preparation error:", error);
      toast.error("Error preparing the file for upload. Please try again.");
      setUploadLoading(false);
    }
  };

  // Add deleteAll function
  const handleDeleteAll = async () => {
    try {
      await axios.delete(`${backendUrl}/api/v1/hemis/deleteAll`, {
        withCredentials: true
      });
      await fetchStudents();
      toast.success("All students deleted successfully");
      setShowDeleteAllConfirm(false);
    } catch (error) {
      console.error('Error deleting all students:', error);
      toast.error(error.response?.data?.message || "Failed to delete all students");
    }
  };

  // Add handleDeleteSelected function
  const handleDeleteSelected = async () => {
    try {
      setDeleteLoading(true);
      await axios.post(`${backendUrl}/api/v1/hemis/delete-multiple`, {
        studentIDs: selectedStudents
      }, {
        withCredentials: true
      });
      await fetchStudents();
      toast.success("Selected students deleted successfully");
      setSelectedStudents([]);
      setShowDeleteSelectedConfirm(false);
    } catch (error) {
      console.error('Error deleting selected students:', error);
      toast.error(error.response?.data?.message || "Failed to delete selected students");
    } finally {
      setDeleteLoading(false);
    }
  };

  // Add select all function for current page
  const handleSelectAllInPage = (checked) => {
    if (checked) {
      const currentPageIds = paginatedStudents.map(student => student.studentID);
      setSelectedStudents(prev => [...new Set([...prev, ...currentPageIds])]);
    } else {
      const currentPageIds = new Set(paginatedStudents.map(student => student.studentID));
      setSelectedStudents(prev => prev.filter(id => !currentPageIds.has(id)));
    }
  };

  // Add toggle individual selection
  const toggleStudentSelection = (studentId) => {
    setSelectedStudents(prev => 
      prev.includes(studentId)
        ? prev.filter(id => id !== studentId)
        : [...prev, studentId]
    );
  };

  return (
    <div className="max-w-full mx-auto p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Student Management</h1>
        <div className="flex gap-3">
          {selectedStudents.length > 0 && (
            <button
              onClick={() => setShowDeleteSelectedConfirm(true)}
              className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <FaTrash className="mr-2" />
              Delete Selected ({selectedStudents.length})
            </button>
          )}
          <button
            onClick={() => setShowDeleteAllConfirm(true)}
            className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <FaTrash className="mr-2" />
            Delete All
          </button>
          <button
            onClick={() => setShowUploadModal(true)}
            className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <FaFileExcel className="mr-2" />
            Upload Excel
          </button>
          <Link 
            href="/Admin/Students/AddStudent"
            className="inline-flex items-center px-4 py-2 bg-[#33d1ff] text-white rounded-lg hover:bg-[#33d1ff]/90 transition-colors"
          >
            <FaPlus className="mr-2" />
            Add New Student
          </Link>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, HEMIS no, or ID..."
              className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33d1ff] focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Status Filter */}
          <div className="relative">
            <select
              className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33d1ff] focus:border-transparent appearance-none"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Status ({students.length})</option>
              <option value="Active">Active ({statusCounts['Active'] || 0})</option>
              <option value="Inactive">Inactive ({statusCounts['Inactive'] || 0})</option>
              <option value="Completed">Completed ({statusCounts['Completed'] || 0})</option>
            </select>
            <FaFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          {/* Faculty Filter */}
          <div className="relative">
            <select
              className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33d1ff] focus:border-transparent appearance-none"
              value={filterFaculty}
              onChange={(e) => setFilterFaculty(e.target.value)}
            >
              <option value="all">All Faculties ({students.length})</option>
              {Object.entries(facultiesWithCount)
                .sort(([a], [b]) => a.localeCompare(b))
                .map(([faculty, count]) => (
                  <option key={faculty} value={faculty}>
                    {faculty} ({count})
                  </option>
                ))}
            </select>
            <FaFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm">
        <table className="w-full table-fixed divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="w-[4%] px-3 py-3 text-left">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-[#33d1ff] focus:ring-[#33d1ff]"
                  checked={paginatedStudents.length > 0 && paginatedStudents.every(student => selectedStudents.includes(student.studentID))}
                  onChange={(e) => handleSelectAllInPage(e.target.checked)}
                />
              </th>
              <th className="w-[8%] px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
              <th className="w-[15%] px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th className="w-[10%] px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">HEMIS No</th>
              <th className="w-[22%] px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Faculty</th>
              <th className="w-[16%] px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Department</th>
              <th className="w-[10%] px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="w-[15%] px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td colSpan="8" className="px-3 py-4 text-center">
                  <div className="flex justify-center items-center space-x-2">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#33d1ff]"></div>
                    <span>Loading...</span>
                  </div>
                </td>
              </tr>
            ) : paginatedStudents.length === 0 ? (
              <tr>
                <td colSpan="8" className="px-3 py-4 text-center text-gray-500">
                  No students found
                </td>
              </tr>
            ) : (
              paginatedStudents.map((student) => (
                <tr key={student.studentID} className="hover:bg-gray-50">
                  <td className="px-3 py-4">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-[#33d1ff] focus:ring-[#33d1ff]"
                      checked={selectedStudents.includes(student.studentID)}
                      onChange={() => toggleStudentSelection(student.studentID)}
                    />
                  </td>
                  <td className="px-3 py-4 text-sm font-medium text-gray-900 truncate">{student.studentID}</td>
                  <td className="px-3 py-4 text-sm text-gray-900 truncate">{student.studentName}</td>
                  <td className="px-3 py-4 text-sm text-gray-500 truncate">{student.hemisNo}</td>
                  <td className="px-3 py-4 text-sm text-gray-500 truncate">{student.faculty}</td>
                  <td className="px-3 py-4 text-sm text-gray-500 truncate">{student.department}</td>
                  <td className="px-3 py-4">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      student.status === 'Active' 
                        ? 'bg-green-100 text-green-800'
                        : student.status === 'Inactive'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-3 py-4 text-sm text-gray-500">
                    <div className="flex items-center gap-3">
                      <Link
                        href={`/Admin/Students/${student.studentID}`}
                        className="text-[#33d1ff] hover:text-[#33d1ff]/80 inline-flex items-center"
                      >
                        <FaEdit className="mr-1" />
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(student.studentID)}
                        className="text-red-600 hover:text-red-800 inline-flex items-center"
                      >
                        <FaTrash className="mr-1" />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {!loading && filteredStudents.length > 0 && (
        <div className="mt-4 flex items-center justify-between bg-white px-4 py-3 sm:px-6 rounded-lg shadow-sm">
          <div className="flex flex-1 justify-between sm:hidden">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md
                ${currentPage === 1 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-gray-50'}`}
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md
                ${currentPage === totalPages
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-gray-50'}`}
            >
              Next
            </button>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to{' '}
                <span className="font-medium">
                  {Math.min(currentPage * itemsPerPage, filteredStudents.length)}
                </span>{' '}
                of <span className="font-medium">{filteredStudents.length}</span> results
              </p>
            </div>
            <div>
              <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`relative inline-flex items-center rounded-l-md px-2 py-2
                    ${currentPage === 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-gray-500 hover:bg-gray-50'}`}
                >
                  <span className="sr-only">Previous</span>
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                  </svg>
                </button>
                {getVisiblePageNumbers().map((number, index) => (
                  number === '...' ? (
                    <span
                      key={`ellipsis-${index}`}
                      className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700"
                    >
                      ...
                    </span>
                  ) : (
                    <button
                      key={number}
                      onClick={() => setCurrentPage(number)}
                      className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold
                        ${currentPage === number
                          ? 'z-10 bg-[#33d1ff] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#33d1ff]'
                          : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'}`}
                    >
                      {number}
                    </button>
                  )
                ))}
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`relative inline-flex items-center rounded-r-md px-2 py-2
                    ${currentPage === totalPages
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-gray-500 hover:bg-gray-50'}`}
                >
                  <span className="sr-only">Next</span>
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl w-[400px] border border-gray-100 animate-fadeIn">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Delete Student</h3>
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center transform transition-transform duration-200 hover:scale-105">
                <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
            </div>
            <div className="text-center mb-6">
              <p className="text-gray-900 font-medium mb-2">Delete Confirmation</p>
              <p className="text-sm text-gray-500">
                Are you sure you want to delete this Student? This action cannot be undone.
              </p>
            </div>
            <div className="flex justify-center space-x-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Simplified Upload Modal */}
      {showUploadModal && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-sm w-[450px]">
          <div className="p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg text-gray-900">Upload Students Excel File</h3>
              <button
                onClick={() => {
                  setShowUploadModal(false);
                  setSelectedFile(null);
                }}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleUpload}>
              <div className="border border-dashed border-gray-300 rounded-lg p-8 text-center mb-4">
                <div className="mx-auto w-12 h-12 text-gray-400 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 13v-1m4 1v-3m4 3V8M12 20H7a4 4 0 01-4-4V8a4 4 0 014-4h5.586a2 2 0 011.414.586l4.414 4.414a2 2 0 01.586 1.414V16a4 4 0 01-4 4h-3" />
                  </svg>
                </div>
                <label className="cursor-pointer block">
                  <span className="text-[#33d1ff] text-sm">Upload a file</span>
                  <input
                    type="file"
                    className="hidden"
                    accept=".xlsx,.xls"
                    onChange={handleFileChange}
                  />
                </label>
                <p className="text-sm text-gray-500 mt-1">or drag and drop</p>
                <p className="text-xs text-gray-400 mt-1">Excel files only</p>
              </div>

              {selectedFile && (
                <p className="text-sm text-gray-500 text-center mb-4">
                  Selected: {selectedFile.name}
                </p>
              )}

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowUploadModal(false);
                    setSelectedFile(null);
                  }}
                  className="px-4 py-2 text-sm text-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={uploadLoading || !selectedFile}
                  className="px-4 py-2 text-sm text-white bg-[#33d1ff] rounded-md disabled:opacity-50"
                >
                  {uploadLoading ? "Uploading..." : "Upload"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete All Confirmation Modal */}
      {showDeleteAllConfirm && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl w-[400px] border border-gray-100 animate-fadeIn">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Delete All Students</h3>
              <button
                onClick={() => setShowDeleteAllConfirm(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center transform transition-transform duration-200 hover:scale-105">
                <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
            </div>
            <div className="text-center mb-6">
              <p className="text-gray-900 font-medium mb-2">Delete All Students Confirmation</p>
              <p className="text-sm text-gray-500">
                Are you sure you want to delete ALL students? This action cannot be undone.
              </p>
            </div>
            <div className="flex justify-center space-x-3">
              <button
                onClick={() => setShowDeleteAllConfirm(false)}
                className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAll}
                className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200"
              >
                Delete All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Selected Confirmation Modal */}
      {showDeleteSelectedConfirm && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl w-[400px] border border-gray-100 animate-fadeIn">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Delete Selected Students</h3>
              <button
                onClick={() => setShowDeleteSelectedConfirm(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center transform transition-transform duration-200 hover:scale-105">
                <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
            </div>
            <div className="text-center mb-6">
              <p className="text-gray-900 font-medium mb-2">Delete Selected Students Confirmation</p>
              <p className="text-sm text-gray-500">
                Are you sure you want to delete {selectedStudents.length} selected students? This action cannot be undone.
              </p>
            </div>
            <div className="flex justify-center space-x-3">
              <button
                onClick={() => setShowDeleteSelectedConfirm(false)}
                disabled={deleteLoading}
                className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200 disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteSelected}
                disabled={deleteLoading}
                className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200 disabled:opacity-50 flex items-center justify-center"
              >
                {deleteLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Deleting...
                  </>
                ) : (
                  'Delete Selected'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
