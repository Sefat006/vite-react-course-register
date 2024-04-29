import React from 'react';
import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {course_name} = bookmark;
    return (
        <div className='bg-slate-300 p-4 rounded-md mb-4'>
            <h1 className=''>{course_name}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object,
};

export default Bookmark;