## Hotel Management - The Crozier
>This project aims to create a Hotel website which can turn the entire process online via a website.

## Overview
### 1. What the website does?
> The website is a hotel website in which the entire manual process that one does while booking the hotel manually is done via an **interactive website** and that too taking **less time**.The website contains the following features:
- **Sign up (Creating an account)**--Stores the **details of the user into the database** and is a one time process for one particular user.
- **Login(For directly signing in,without having to sign up )**--Takes the **user to the the rooms page from where the user can book room or cancel room and also see the hotels details.**
- **Booking a room(For booking a room)**--Allows the **user to book a room if rooms are available for that particular date**.
- **Cancelling a room(For cancelling a booked room)**--Allows the **user to cancel the booked room.**
- **Signout(For signing out of an account)**--Allows the **user to come out of his account.**

### 2. What are the technologies used?
- The technologies used are:**HTML,CSS,BootStrap,JavaScript,Node JS,Express JS,MongodB.**
### 3.  Challenges faced during the project?
> Some of the challenges which I faced during the making of this project are as follows:
- I found no way to use the bootstrap modal.Basically, I was not getting how to tap into individual fields of  booking form or signup form. So,I finally found a way around by using the routes and creating separate pages for signup and sign.

- Since I was new to mongodB,it was a bit difficult to write the query for limiting the number of rooms to a particular number and for that particular date.


## How to use the project?
> The following takes you through the entire run through of the project:

- **Home Page**:The home page of the website contains the **basic navigation bar** to navigate to the **different sections on the homepage(designed using bootstrap navigation bar)**.Then it contains an image on which **signup and signin buttons** are placed.Then,there is **rooms section,dining section,fitness section and weddings section** which gives the user a good colourful view to the eyes and also hints about the facilities available at the hotel.Then there is a **Why us div** which gives the plus points of our hotel so as to attract the customers.And finally there is the **footer section** which consists of social media links.The screenshots of the homepage are available below:
                                                                 
                                                                 **Home Section**
                                                                 
                                                                 
![Home Page](https://github.com/viraj2002/ProjectHotelManagement/blob/master/readmeimages/homepagereadmeimages1_2.png)
                                                                 
                                                                 
                                                                 **Rooms Section**
                                                                 
                                                                 

![Home Page-Rooms Section](https://github.com/viraj2002/ProjectHotelManagement/blob/master/readmeimages/homepageroomsreadmeimages2_2.png)

                                                                 
                                                                 **Dining Section**

![Home Page-Dining Section](https://github.com/viraj2002/ProjectHotelManagement/blob/master/readmeimages/homepagediningreadmeimages3_2.png)

                                                                 
                                                                 **Fitness Section**

![Home Page-Fitness Section](https://github.com/viraj2002/ProjectHotelManagement/blob/master/readmeimages/homepagefitnessreadmeimages3_2.png)
                                                        
                                                                  **Dining Section**

![Home Page](https://github.com/viraj2002/ProjectHotelManagement/blob/master/readmeimages/homepageweddingsreadmeimages3_3.png)

                                                              **Footer Section**

![Home Page-Footer section](https://github.com/viraj2002/ProjectHotelManagement/blob/master/readmeimages/homepagefooterreadmeimages3_2.png)


- **Sign Up**:This page is accessible if one clicks the sign up button on the home page.Then,when you click on the **signup button**,you will be redirected to the signup page.Here,you have to enter your valid details here and then click on "Create Account".At the backend,if you are already registered,then it will just tell the user that he has already registered and the user will be directed to the sign in page.
                                                             
                                                             
                                                               **Sign Up Page**
                                                               

![Home Page-Sign up section](https://github.com/viraj2002/ProjectHotelManagement/blob/master/readmeimages/signupreadmeimages3_2.png)


- **Sign In**:This page is accessible if one clicks the direct **sign in button** on the home page or if the user registers successfully.Then,when you enter the details and click on the Login button,your details will be validated and if they are **incorrect**,then the user will be **informed** about the same and if they are **valid**,the user will be taken **to the rooms page.**
                                                    
                                                    
                                                               **Sign In Page**
                                                               

![Home Page-Sign in section](https://github.com/viraj2002/ProjectHotelManagement/blob/master/readmeimages/signinreadmeimages3_2.png)


- **Rooms page**:Here,you will see the **rooms images,its interior and the various facilities like swimming pool,gymnasium**,etc.Also,there are some nearby attractions,mentioned there.Also,there is a signout button,which will take the the user to the home page after clicking on Sign out button.Also,there are **book now** and **cancel now** buttons.
  
                                                               
                                                               **Rooms  Page**
                                                             
                                                             
![Rooms page 1 ](https://github.com/viraj2002/ProjectHotelManagement/blob/master/readmeimages/roomspagereadmeimages1_2.png)

![Rooms page 2](https://github.com/viraj2002/ProjectHotelManagement/blob/master/readmeimages/roomspagereadmeimages2_2.png)

![Rooms Page-Nearby attractions](https://github.com/viraj2002/ProjectHotelManagement/blob/master/readmeimages/roomspagereadmeimages3_2.png)


- **Book now**:The clicking of BookNow button on rooms page leads to this page.This page allows a **user to book the room after successful validation of the users details and also checking the availability of rooms on that particular date**.On successful booking,the user is redirected to rooms page from where he can signout.

                                                               
                                                               **Book Now Page**
                                                                
                                                                
![Booking  Page](https://github.com/viraj2002/ProjectHotelManagement/blob/master/readmeimages/bookingspagereadmeimages3_2.png)


- **Cancel now**:The clicking of CancelNow button on rooms page leads to this page.This page allows the user to cancel a room. It **checks if the user has actually booked a room and if he has then it allows to cancel the room**. On successful cancellation,the user is redirected to rooms page from where he can signout.
                                                                        
                                                                        
                                                                **Cancel Now Page**
  
![Cancel Booking Page](https://github.com/viraj2002/ProjectHotelManagement/blob/master/readmeimages/cancelbookingspagereadmeimages3_2.png)

## Conclusion
>To conclude, the above website handles most of the options for booking a hotel room and such type of websites will help more hotels to work **digitally and expand their business.**


   










