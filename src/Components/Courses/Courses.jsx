import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = ({handleBookmarks, handleCreditHour, handlePrices}) => {

    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('Register.json')
        .then(res => res.json())
        .then(data => setCourses(data.courses));
    })

    return (
        <div className=''>
            <h1 className='text-2xl font-bold mb-4'>Courses: {courses.length}</h1>
            <div className='mr-8 grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
                {
                    courses.map( course => <Course 
                        key={course.course_id}
                        course={course}
                        handleBookmarks={handleBookmarks}
                        handleCreditHour={handleCreditHour}
                        handlePrices={handlePrices}
                        ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;