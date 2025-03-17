import axios from "axios";
import { BASE_URL }  from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addRequests } from "../utils/requestSlice";

const Requests = () => {

    const requests = useSelector(store => store.requests);
    const dispatch = useDispatch()


    const fetchRequest =  async () => {
        try{

            const res = await axios.get(BASE_URL + "/user/requestes/received", {
                withCredentials : true,
            });

            dispatch(addRequests(res.data.data));

        }catch(err){

        }
    };

    useEffect(() => {
        fetchRequest();
    }, []);

    if(!requests) return;

    if(requests.length === 0) return <h1> No Requests Found!</h1>


    return (
        <div className="text-center my-10">
            <h1 className="text-bold text-white text-3xl">Connection Requests</h1>
            

            {requests.map((request) => {
                const {_id ,firstName, lastName, photoUrl, age, gender, about} = request.fromUserId;

               return (
               <div key={_id} className="flex justify-between items-center m-4 p-4 rounded-lg bg-base-300 w-2/3 mx-auto">
                    <div>
                        <img src={photoUrl} className="w-20 h-20 rounded-full" alt="photo" />
                    </div>
                    <div className="text-left mx-4">
                        <h2 className="font-bold text-xl">{firstName + " " + lastName}</h2>
                        { age && gender &&<p>{age + " , " + gender}</p>}
                        <p>{about}</p>
                    </div>
                    <div>                
                        <button className="btn btn-primary mx-2">Reject</button>
                        <button className="btn btn-secondary mx-2">Accept</button>
                    </div>
                    
                    
               </div>)
            
})}
        </div>
    );
};

export default Requests;