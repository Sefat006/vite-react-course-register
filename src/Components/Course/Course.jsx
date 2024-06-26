import React from 'react';
import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Course = ({course, handleBookmarks, handleCreditHour, handlePrices}) => {
    const {image_url, course_credit, price, course_name, course_details} = course;
    //  console.log(handleBookmarks)
    return (
        <div className='bg-white mb-20 text-clip overflow-hidden flex flex-col  bg-white border-white rounded-lg shadow dark:border-gray-700 p-2'>
            <div className='mb-2'>
                <img className='rounded-md h-52 w-96'  src={image_url} alt={`image of the course name ${course_name}`} />
            </div>
            <h2 className='text-xl font-semibold mb-3'>{course_name}</h2>
            <p className='flex-grow'><span className='font-semibold'>Course Details:</span> <small>{course_details}</small></p>
            <div className='mt-4 font-semibold flex gap-10 sm:gap-1 lg:gap-10 justify-center'>
                    <small>$</small>
                    <small>Price:{price} </small>
                    <button onClick={()=>handleBookmarks(course)} className=''><FaBookmark></FaBookmark></button>
                    <small>Credit: {course_credit}</small>
                </div>
            <button onClick={()=>handleCreditHour(course_credit)} className='p-2 bg-blue-500 shadow-2xl bottom-o left-0 right-0 rounded-md w-full mt-3 text-xl text-white hover:bg-blue-700'>Select</button>
           
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
};

export default Course;