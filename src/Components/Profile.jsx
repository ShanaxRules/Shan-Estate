import { useContext } from "react";
import useDocumentTitle from "../TitleChange/useTitleChange";
import { AuthContext } from "./AuthProvider";
import { updateProfile } from "firebase/auth";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";



const Profile = () => {
    
    const { user } = useContext(AuthContext);
    console.log(user);
    useDocumentTitle('Your Profile');

    const handleName = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;

        if (!name) {
            console.log("Name cannot be empty");
            return;
        }

        try {
            await updateProfile(user, { displayName: name });

            console.log("Name updated to:", name);
        } catch (error) {
            console.error("Error updating name:", error);
        }
    };

    return (

        <div className="flex flex-col md:flex-col lg:flex-row gap-x-3 gap-y-3">
            <div className="h-[650px] flex justify-center flex-col items-center text-center gap-y-6 flex-1">
                <div className="w-[50px] h-[50px] rounded-full mb-4"><img src=""/><img className="rounded-full" src={user?.photoURL || "https://img.icons8.com/?size=100&id=7819&format=png&color=000000" } alt="" /></div>
                <h2 className="text-2xl text-black">Name : {user?.displayName || "No Name Set"}</h2>
                <h2 className="text-2xl text-black">Email : {user?.email || "No Email Set"}</h2>

                <div>
                    <h2 className="mb-4">Click here to change your name:</h2>
                    <div className="flex lg:flex-row md:flex-row flex-col">
                        <form onSubmit={handleName}>
                            <label htmlFor="name">
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Enter here"
                                    className="input input-bordered w-full max-w-xs"
                                />
                            </label>
                            <input type="submit" value="Submit" className="btn btn-primary ml-2 mt-3" />
                        </form>
                    </div>
                </div>
            </div>

            <div className="flex-1">
                <DotLottieReact
                    src="https://lottie.host/636dabb3-406d-429e-9db7-161a8539ad2b/ugNx3va4zD.lottie"
                    loop
                    autoplay
                />

            </div>


        </div>

    );
};

export default Profile;
