import { ArrowBackIosOutlined, ArrowForwardIos, ArrowForwardIosOutlined } from "@material-ui/icons";
import  "./list.scss";
import ListItem from "../listItem/ListItem";

const List = () => {
  const handleclick =(direction)=>{
            
  }
  return (
    <div className="list">
       <span className="listTitle">continue to watch</span>
       <div className="wrapper">
         <ArrowBackIosOutlined className="sliderArrow left" onclick={()=>handleclick("left")}/>
         <div className="container">
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
          <ListItem/>
         </div>
         <ArrowForwardIosOutlined className="sliderArrow right" onclick={()=>handleclick("right")}/>
       </div>

      </div>
  )
}

export default List