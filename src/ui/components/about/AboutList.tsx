import { aboutStyle } from '../../styles/aboutStyle';

const { list, dt, dd } = aboutStyle();

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
      <dl className="w-[40%] dml:w-full">
         {itemList.map(({ id, legend, text }) => (
            <div key={id} role={legend} className={list()}>
               <span className="block w-[408px] absolute h-[35px] mb-1  bg-red-100 rounded-l-[50px]">
                  <dt className={dt()}>{legend}</dt>
               </span>
               <dd className={dd()}>{text}</dd>
            </div>
         ))}
      </dl>
   );
};
