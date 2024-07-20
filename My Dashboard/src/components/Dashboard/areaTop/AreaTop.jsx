import { MdOutlineMenu } from "react-icons/md";
import "./AreaTop.scss"
import { useContext, useEffect } from "react";
import { SidebarContext } from "../../../Context/SidebarContext";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { addDays } from "date-fns";
import { DateRange } from "react-date-range";
const AreaTop =  () => {

    const {openSidebar} = useContext(SidebarContext);
    
    const [state , useState] = useState ([
        {
            startDate : new Date(),
            endDate : addDays(new Date(),7),
            key : "Selection",
        },
    ]);

    const [showDatePicker ,setShowDatePicker] = useState(false);
    const dataRangeRef = useRef(null);

    const handleInputClick = () => {
        setShowDatePicker(true);
    };

    const handleClickOutside = (event) => {
    if(dataRangeRef.current && !dataRangeRef.current.contains(event.target)){
            setShowDatePicker(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown",handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    },[]);

return (
     
<section className="content-area-top">
{/* Menu Button  */}
    <div className="area-top-l">
        <button className="sidebar-open-btn" type="button"
            onClick={openSidebar} >
                <MdOutlineMenu size={24}/>
        </button>
        <h2 className="area-top-title">Dashboard</h2>
    </div>
 {/* Date Picker  */}
    <div className="area-top-r">
        <div ref={dataRangeRef} 
            className= {`data-range-wrpper ${!showDatePicker ? "hide-data-range" :""}`}
            onClick = {handleInputClick}>
            <DateRange
             editableDateInputs={true}
             onChange={(item) => setState([item.selection])}
             moveRangeOnFirstSelection={false}
             ranges={state}
             showMonthAndYearPickers={false} >
            </DateRange>    
        </div>
    </div>
</section>

    
)
}

export default AreaTop;