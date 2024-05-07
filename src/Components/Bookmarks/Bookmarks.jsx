
import Bookmark from "../Bookmark/Bookmark"
import { PropTypes } from 'prop-types';
const Bookmarks =({bookmarks, creditHour, prices}) => {
    return (
        <div className='sm:w-max bg-slate-200 mt-4 rounded-md p-4'>
            <h1 className='text-2xl font-bold'>Course Name</h1>
            <div className="mt-4">
                {
                    bookmarks.map( bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
                }
            </div>
            <hr className="border-black mb-4"/>
            <h2 className="font-semibold">Total Credit Hour : {creditHour}</h2>
            <hr className="border-black mt-4"/>
            <h2 className="font-semibold">Total Price : </h2>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    creditHour: PropTypes.number,
}


export default Bookmarks;