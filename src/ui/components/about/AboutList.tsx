const itemList = [
   {
      id: 1,
      legend: 'Track company-wide progress',
      text: 'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.',
   },

   {
      id: 2,
      legend: 'Advanced built-in reports',
      text: 'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.',
   },

   {
      id: 3,
      legend: 'Everything you need in one place',
      text: 'Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.',
   },
];

export const AboutList = () => {
   return (
      <dl className="w-[40%]">
         {itemList.map(({ id, legend, text }) => (
            <div
               key={id}
               className="before:content-['02'] before:first:content-['01'] before:last:content-['03'] before:text-lg before:mr-3 before:relative before:top-7 before:right-24 before:bg-brightRed before:px-6 before:py-2.5 before:rounded-[50px] before:font-medium before:text-white"
            >
               <dt className="text-darkBlue text-lg font-semibold">{legend}</dt>
               <dd className="text-lg text-darkGrayishBlue mt-3 mb-7">
                  {text}
               </dd>
            </div>
         ))}
      </dl>
   );
};
