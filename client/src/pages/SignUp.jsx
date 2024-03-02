import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import { supabase } from "../lib/helper/SupabaseClient";

   
  export default function SignUp() {

    const [Email , setEmail] =useState('');
    const [Password , setPassword] =useState('');
    const [Name , setName] =useState('');
    const navigate = useNavigate();

    const onEmailChange = (event) => {

        setEmail(event.target.value);
        console.log(Email)
      };

      const onPassChange = (event) => {
        setPassword(event.target.value);
        console.log(Password)
      }; 

   const HandleSignup =async() =>{
    console.log(Email)
    console.log(Password)
    try {
        let { data, error } = await supabase.auth.signUp({
            email: Email,
            password: Password
        });
        if (error) {
            throw error;
        }
        console.log('User signed up successfully:', data);
        navigate("/home")
    } catch (error) {
        console.error('Error signing up user:', error.message);
    }
      
   }

    return (
        <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
       <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              value={Name}
              onChange={()=>{setName(this.value);}}
              required
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3" >
              Your Email
            </Typography>
            <Input
              type='email'
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              value={Email}
              onChange={onEmailChange}
              required
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
            name= "pass"
              type="password"
              size="lg"
              placeholder="********"
              value={Password}
              onChange={onPassChange}
              required
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          
          <Button className="mt-6" fullWidth onClick={HandleSignup}>
            sign up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to='/login' className="font-medium text-gray-900">
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
      </section>
    );
  }