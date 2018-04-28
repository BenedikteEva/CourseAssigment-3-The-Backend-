
function handleHttpErrors(res) {
    if (!res.ok) {
        throw { message: res.statusText, status: res.status };
    }
    return res.json();
}

class FakeFacade {

  

    // læser fra token hver gang den ikke er null (hvilket også gælder med refreshes, redirects osv.)
    getRole =async () => {
    
  if (this.login!==null){
      return await this.login.userRole
    }else{
console.log("the user object from login never got to getRole")
    }}

   getUserName=()=>{
       return this.login.userName
   }

   getUserByNAme=(user)=>{
   
  const result =users.find(user2=>user2.userName===user) 
   if(result!==null){
 return result
   }else{
       console.log("no user")
   }
}


    loggedIn = () => {
       
        return true;
    }
    logout = () => {
     this.loggedIn=false;
    }

    login = async (user, pass) => {
     const userObj=this.getUserByNAme(user)
     console.log(userObj)
             return await userObj;
         
                 
            }
            
        
  
    }


const facade = new FakeFacade();

export default facade;
const users = [
        
    {
        "id": "1",
        "userName": "user",
        "userRole": "user",
        "password": "test",
        "search": ["cafe woody"],
        "checkins": ["cafewoody"],
        "venuehistory": ["cafewoody"],
        "venuelikes": ["cafewoody"],
        "review": "Lorem ipsum dolor sit amet."
      },
    
      {
        "id": "2",
        "userName": "John Doe",
        "userRole": "user",
        "password": "test",
        "search": ["cafe woody", "McDonalds", "Raadvad Kro", "Lyngby", "søborg"],
        "checkins": ["cafewoody", "McDonalds", "RaadvadKro"],
        "venuehistory": ["cafewoody", "McDonalds", "RaadvadKro"],
        "venuelikes": ["cafewoody", "RaadvadKro"],
        "review": "Lorem ipsum dolor sit amet."
      },
    
      {
        "id": "3",
        "userName": "James Dean",
        "userRole": "user",
        "password": "test",
        "search": ["Hardrock Cafe", "Kentucky Friend Chicken", "Effes Pizza"],
        "checkins": ["Hardrock Cafe", "Effes Pizza"],
        "venuehistory": ["Hardrock Cafe", "Effes Pizza"],
        "venuelikes": ["Hardrock Cafe", "Effes Pizza"],
        "review": "Ut enim ad minim veniam, quis nostrud exercitation."
      },
    
      {
        "id": "4",
        "userName": "Sally HeartField",
        "userRole": "user",
        "password": "test",
        "search": ["cafe ruccula", "Noma", "Cafe Petrine", "Lyngby", "københavn"],
        "checkins": ["cafe ruccula", "Noma"],
        "venuehistory": ["cafe rucculay", "Noma"],
        "venuelikes": ["cafe ruccula"],
        "review": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      },
    
      {
        "id": "5",
        "userName": "Al Pacino",
        "userRole": "user",
        "password": "test",
        "search": ["tante maren", "McDonalds", "RaadvadKro", "Lyngby", "Cafeer", "Brdr. Ox"],
        "checkins": ["cafewoody", "McDonalds", "RaadvadKro"],
        "venuehistory": ["cafewoody", "McDonalds", "RaadvadKro"],
        "venuelikes": ["cafewoody", "RaadvadKro", "RaadvadKro", "Brdr. Ox"],
        "review": "Excepteur sint."
      },
    
      {
        "id": "6",
        "userName": "Andersine And",
        "userRole": "user",
        "password": "test",
        "search": ["Geranium", "Krebsgaarden", "restaurant amalie"],
        "checkins": ["Geranium"],
        "venuehistory": ["Geranium"],
        "venuelikes": [],
        "review": ""
      },
    
      {
        "id": "7",
        "userName": "admin",
        "userRole": "admin",
        "password": "test",
        "search": ["cafe woody"],
        "checkins": ["cafewoody"],
        "venuehistory": ["cafewoody"],
        "venuelikes": ["cafewoody"],
        "review": "Lorem ipsum dolor sit amet."
      }

]