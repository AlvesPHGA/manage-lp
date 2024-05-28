export const DepositionsCards = () => {
   return (
      <div className="flex items-center justify-center mt-20 mb-10">
         <div className="relative text-center px-10 pb-10 pt-20 bg-veryLightGray rounded">
            <figure className="size-[80px] absolute bottom-52 right-[50%] translate-x-[50%]">
               <img src="./avatars/avatar-ali.png" alt="photo by Ali Bravo" />
            </figure>
            <span className="text-lg text-darkBlue font-semibold">
               Ali Bravo
            </span>
            <div className="w-[540px] mt-5">
               <p className="text-darkGrayishBlue text-lg">
                  "We have been able to cancel so many other subscriptions since
                  using Manage. There is no more cross-channel confusion and
                  everyone is much more focused."
               </p>
            </div>
         </div>
      </div>
   );
};
