import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import VacationModel from "../../../Models/VacationModel";
import config from "../../../utils/Config";
import "./VacationCard.css";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { useEffect, useState } from "react";
import store from "../../../Redux/Store";
import { NavLink, useNavigate } from "react-router-dom";
import VacationsService from "../../../Services/VacationsService";
import followService from "../../../Services/FollowService";

interface VacationCardProps {
    vacation: VacationModel;

}
function VacationCard(props: VacationCardProps): JSX.Element {

  const [isFollow, setFollow] = useState<boolean>(props.vacation.isFollow);


     function toggleButton():void{
      if(isFollow){
        followService.removeFollow(props.vacation.vacationId)
          .then(()=>{
          setFollow(false);
          
        })
        .catch(err => {console.log(err)})
      } 
      else{
        followService.addFollow(props.vacation.vacationId)
            .then(() => {
              setFollow(true);
            })
            .catch(err => console.log(err));

      } 
    }
    function dateFormat(dateTime:string):string{
      const d = new Date(dateTime);
      const date = d.toLocaleString().substring(0,10)
      return date;

  }


     async function deleteVacation(id:number):Promise<any>{
        try{
            const confirmDelete = window.confirm("Are you sure?")

            if(!confirmDelete) return;
             await VacationsService.deleteOneVacation(id)  
                
        }

        catch(err: any){
            alert(err.message)

        }
    }




    return (
        <div className="VacationCard">
            <br/>
            <Card className="card">
              <div className="card-header"> 
              {store.getState().authState?.user?.role === "Admin" ?
              <>
              <Button onClick={() => deleteVacation(props.vacation.vacationId)} className="delete">❌</Button>
              <NavLink to={"/update-vacation/" + props.vacation.vacationId}><Button  className="update"> 
              <BorderColorIcon/>
               </Button > </NavLink>  
              </>
              :
              <Checkbox 
              disableRipple 
              className="icon" 
              checked={isFollow} 
              onChange={toggleButton} 
              color="secondary"
              //  icon={<FavoriteBorder />} 
              //  checkedIcon={<Favorite />} 
              />
              }
              </div>
            <CardHeader
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
       
        title={props.vacation.destination}
        subheader={dateFormat(props.vacation.startDate) + ` | ` + dateFormat(props.vacation.endDate)}

        />
        <CardMedia
        component="img"
        height="194"
        image={config.vacationsImageUrl + props.vacation.imageName}
        alt="Paella dish"
        />
        <CardContent>
        <Typography variant="body1" color="textSecondary">
        {props.vacation.description}
        </Typography>
      </CardContent>
      <Typography className="price" variant="h4">
        <div>
        {"$"+props.vacation.price}
        </div>
      </Typography>

            </Card>
    
        </div>
    );
}

export default VacationCard;
