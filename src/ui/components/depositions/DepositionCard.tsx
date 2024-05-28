const listCard = [
   {
      id: 1,
      img: './avatars/avatar-anisha.png',
      name: 'Anisha Li',
      deposition:
         "Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
   },

   {
      id: 2,
      img: './avatars/avatar-ali.png',
      name: 'Ali Bravo',
      deposition:
         'We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.',
   },

   {
      id: 3,
      img: './avatars/avatar-richard.png',
      name: 'Richard Watts',
      deposition:
         "Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone I talk to!",
   },

   {
      id: 4,
      img: './avatars/avatar-shanai.png',
      name: 'Shanai Gough',
      deposition:
         'Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.',
   },
];

export const DepositionCard = () => {
   return (
      <>
         {listCard.map(({ id, img, name, deposition }) => (
            <div
               key={id}
               className="relative text-center px-10 pb-10 pt-20 bg-veryLightGray rounded"
            >
               <figure className="size-[80px] absolute bottom-52 right-[50%] translate-x-[50%]">
                  <img src={img} alt={`photo by ${name}`} />
               </figure>
               <span className="text-lg text-darkBlue font-semibold">
                  {name}
               </span>
               <div className="w-[540px] mt-5">
                  <p className="text-darkGrayishBlue text-lg">"{deposition}"</p>
               </div>
            </div>
         ))}
      </>
   );
};
