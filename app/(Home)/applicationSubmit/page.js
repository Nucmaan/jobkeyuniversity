'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Page() {
  const [formData, setFormData] = useState({
    name: '',
    mothersName: '',
    dateOfBirth: '',
    placeOfBirth: '',
    maritalStatus: '',
    gender: '',
    schoolName: '',
    academicYear: '',
    averageEarned: '',
    district: '',
    village: '',
    mobile: '',
    email: '',
    faculty: '',
    program: '',
    semester: '',
    shiftTime: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleShiftTimeChange = (shiftTime) => {
    setFormData({
      ...formData,
      shiftTime
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const emailBody = `
      STUDENT APPLICATION FORM SUBMISSION
      
      STUDENT DETAILS:
      Name: ${formData.name}
      Mother's name: ${formData.mothersName}
      Date of birth: ${formData.dateOfBirth}
      Place of birth: ${formData.placeOfBirth}
      Marital Status: ${formData.maritalStatus}
      Gender: ${formData.gender}
      
      QUALIFICATION:
      Name of the School: ${formData.schoolName}
      Academic Year: ${formData.academicYear}
      Average earned: ${formData.averageEarned}
      
      CONTACT ADDRESS:
      District: ${formData.district}
      Village: ${formData.village}
      Mobile: ${formData.mobile}
      Email: ${formData.email}
      
      Faculty: ${formData.faculty}
      Program: ${formData.program}
      Semester: ${formData.semester}
      
      SHIFT TIME: ${formData.shiftTime}
    `;
    
    try {
       const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'system616500191@gmail.com',
          subject: 'Student Application Form Submission',
          text: emailBody,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
         setFormData({
          name: '',
          mothersName: '',
          dateOfBirth: '',
          placeOfBirth: '',
          maritalStatus: '',
          gender: '',
          schoolName: '',
          academicYear: '',
          averageEarned: '',
          district: '',
          village: '',
          mobile: '',
          email: '',
          faculty: '',
          program: '',
          semester: '',
          shiftTime: ''
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#33d1ff]/10 to-white flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full text-center">
          <div className="text-4xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-[#33d1ff] mb-4">Application Submitted!</h2>
          <p className="text-gray-600 mb-6">Thank you for submitting your application. We will review it and get back to you soon.</p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-[#33d1ff] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#33d1ff]/90 transition-colors"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#33d1ff]/10 to-white py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border mt-20 border-[#33d1ff]/20">
          
          <div className="text-center py-5 bg-gradient-to-r from-[#33d1ff]/10 to-[#33d1ff]/5 font-bold text-xl text-[#33d1ff] border-b-4 border-[#33d1ff]/20">
            APPLICATION FORM (Academic Programs)
          </div>
          
          <form onSubmit={handleSubmit} className="p-8">
            <div className="mb-10 bg-white rounded-lg p-6 shadow-md border-2 border-[#33d1ff]/10">
              <h2 className="font-bold text-xl mb-6 text-[#33d1ff] border-b-2 border-[#33d1ff]/20 pb-2 flex items-center">
                <span className="bg-[#33d1ff] text-white rounded-full w-8 h-8 flex items-center justify-center mr-2 text-sm">1</span>
                STUDENT DETAILS
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">1. Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border-2 border-[#33d1ff]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33d1ff] focus:border-transparent transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">2. Mother's name</label>
                  <input
                    type="text"
                    name="mothersName"
                    value={formData.mothersName}
                    onChange={handleInputChange}
                    className="w-full p-3 border-2 border-[#33d1ff]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33d1ff] focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">3. Date of birth</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className="w-full p-3 border-2 border-[#33d1ff]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33d1ff] focus:border-transparent transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">4. Place of birth</label>
                  <input
                    type="text"
                    name="placeOfBirth"
                    value={formData.placeOfBirth}
                    onChange={handleInputChange}
                    className="w-full p-3 border-2 border-[#33d1ff]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33d1ff] focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">5. Marital Status</label>
                  <select
                    name="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={handleInputChange}
                    className="w-full p-3 border-2 border-[#33d1ff]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33d1ff] focus:border-transparent transition-all appearance-none bg-white"
                    required
                  >
                    <option value="">Select Status</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widowed">Widowed</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">6. Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full p-3 border-2 border-[#33d1ff]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33d1ff] focus:border-transparent transition-all appearance-none bg-white"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="mb-10 bg-white rounded-lg p-6 shadow-md border-2 border-[#33d1ff]/10">
              <h2 className="font-bold text-xl mb-6 text-[#33d1ff] border-b-2 border-[#33d1ff]/20 pb-2 flex items-center">
                <span className="bg-[#33d1ff] text-white rounded-full w-8 h-8 flex items-center justify-center mr-2 text-sm">2</span>
                QUALIFICATION
              </h2>
              
              <div className="grid grid-cols-1 gap-4 mb-4">
                <div className="overflow-x-auto rounded-lg border-2 border-[#33d1ff]/20">
                  <table className="min-w-full">
                    <thead className="bg-[#33d1ff]/10">
                      <tr>
                        <th className="p-3 border-b-2 border-[#33d1ff]/20 text-left text-[#33d1ff] font-medium">Name Of the School</th>
                        <th className="p-3 border-b-2 border-[#33d1ff]/20 text-left text-[#33d1ff] font-medium">Academic Year</th>
                        <th className="p-3 border-b-2 border-[#33d1ff]/20 text-left text-[#33d1ff] font-medium">Average earned</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border-r border-[#33d1ff]/10">
                          <input
                            type="text"
                            name="schoolName"
                            value={formData.schoolName}
                            onChange={handleInputChange}
                            className="w-full p-2 focus:outline-none border-b border-[#33d1ff]/10 focus:border-[#33d1ff] transition-all"
                            required
                          />
                        </td>
                        <td className="p-3 border-r border-[#33d1ff]/10">
                          <input
                            type="text"
                            name="academicYear"
                            value={formData.academicYear}
                            onChange={handleInputChange}
                            className="w-full p-2 focus:outline-none border-b border-[#33d1ff]/10 focus:border-[#33d1ff] transition-all"
                            required
                          />
                        </td>
                        <td className="p-3">
                          <input
                            type="text"
                            name="averageEarned"
                            value={formData.averageEarned}
                            onChange={handleInputChange}
                            className="w-full p-2 focus:outline-none border-b border-[#33d1ff]/10 focus:border-[#33d1ff] transition-all"
                            required
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            <div className="mb-10 bg-white rounded-lg p-6 shadow-md border-2 border-[#33d1ff]/10">
              <h2 className="font-bold text-xl mb-6 text-[#33d1ff] border-b-2 border-[#33d1ff]/20 pb-2 flex items-center">
                <span className="bg-[#33d1ff] text-white rounded-full w-8 h-8 flex items-center justify-center mr-2 text-sm">3</span>
                CONTACT ADDRESS
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">1. District</label>
                  <input
                    type="text"
                    name="district"
                    value={formData.district}
                    onChange={handleInputChange}
                    className="w-full p-3 border-2 border-[#33d1ff]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33d1ff] focus:border-transparent transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">2. Village</label>
                  <input
                    type="text"
                    name="village"
                    value={formData.village}
                    onChange={handleInputChange}
                    className="w-full p-3 border-2 border-[#33d1ff]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33d1ff] focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">3. Mobile</label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="w-full p-3 border-2 border-[#33d1ff]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33d1ff] focus:border-transparent transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">4. Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border-2 border-[#33d1ff]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33d1ff] focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-10 bg-white rounded-lg p-6 shadow-md border-2 border-[#33d1ff]/10">
              <h2 className="font-bold text-xl mb-6 text-[#33d1ff] border-b-2 border-[#33d1ff]/20 pb-2 flex items-center">
                <span className="bg-[#33d1ff] text-white rounded-full w-8 h-8 flex items-center justify-center mr-2 text-sm">4</span>
                PROGRAM DETAILS
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Faculty</label>
                  <input
                    type="text"
                    name="faculty"
                    value={formData.faculty}
                    onChange={handleInputChange}
                    className="w-full p-3 border-2 border-[#33d1ff]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33d1ff] focus:border-transparent transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Program</label>
                  <input
                    type="text"
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    className="w-full p-3 border-2 border-[#33d1ff]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33d1ff] focus:border-transparent transition-all"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Semester</label>
                  <input
                    type="text"
                    name="semester"
                    value={formData.semester}
                    onChange={handleInputChange}
                    className="w-full p-3 border-2 border-[#33d1ff]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33d1ff] focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-10 bg-white rounded-lg p-6 shadow-md border-2 border-[#33d1ff]/10">
              <h2 className="font-bold text-xl mb-6 text-[#33d1ff] border-b-2 border-[#33d1ff]/20 pb-2 flex items-center">
                <span className="bg-[#33d1ff] text-white rounded-full w-8 h-8 flex items-center justify-center mr-2 text-sm">5</span>
                SHIFT TIME
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center p-3 border-2 border-[#33d1ff]/20 rounded-lg hover:bg-[#33d1ff]/5 transition-colors cursor-pointer">
                  <input
                    type="radio"
                    id="morning"
                    name="shiftTime"
                    value="Morning"
                    checked={formData.shiftTime === 'Morning'}
                    onChange={() => handleShiftTimeChange('Morning')}
                    className="w-4 h-4 text-[#33d1ff] mr-3"
                    required
                  />
                  <label htmlFor="morning" className="text-gray-700 font-medium cursor-pointer">Morning</label>
                </div>
                
                <div className="flex items-center p-3 border-2 border-[#33d1ff]/20 rounded-lg hover:bg-[#33d1ff]/5 transition-colors cursor-pointer">
                  <input
                    type="radio"
                    id="afternoon"
                    name="shiftTime"
                    value="Afternoon"
                    checked={formData.shiftTime === 'Afternoon'}
                    onChange={() => handleShiftTimeChange('Afternoon')}
                    className="w-4 h-4 text-[#33d1ff] mr-3"
                  />
                  <label htmlFor="afternoon" className="text-gray-700 font-medium cursor-pointer">Afternoon</label>
                </div>
                
                <div className="flex items-center p-3 border-2 border-[#33d1ff]/20 rounded-lg hover:bg-[#33d1ff]/5 transition-colors cursor-pointer">
                  <input
                    type="radio"
                    id="partTime"
                    name="shiftTime"
                    value="Part time"
                    checked={formData.shiftTime === 'Part time'}
                    onChange={() => handleShiftTimeChange('Part time')}
                    className="w-4 h-4 text-[#33d1ff] mr-3"
                  />
                  <label htmlFor="partTime" className="text-gray-700 font-medium cursor-pointer">Part time</label>
                </div>
                
                <div className="flex items-center p-3 border-2 border-[#33d1ff]/20 rounded-lg hover:bg-[#33d1ff]/5 transition-colors cursor-pointer">
                  <input
                    type="radio"
                    id="distanceLearning"
                    name="shiftTime"
                    value="Distance Learning"
                    checked={formData.shiftTime === 'Distance Learning'}
                    onChange={() => handleShiftTimeChange('Distance Learning')}
                    className="w-4 h-4 text-[#33d1ff] mr-3"
                  />
                  <label htmlFor="distanceLearning" className="text-gray-700 font-medium cursor-pointer">Distance Learning</label>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-10">
              <button
                type="submit"
                className="px-10 py-4 bg-[#33d1ff] text-white font-bold text-lg rounded-lg shadow-lg hover:bg-[#33d1ff]/90 transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#33d1ff] focus:ring-opacity-50"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}