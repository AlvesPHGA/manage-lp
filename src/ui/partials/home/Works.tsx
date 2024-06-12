import { WorksContent } from '../../components/works/worksContent';

export const Works = () => {
   return (
      <section className="relative py-20 bg-brightRed bg-[url('./icons/bg-simplify-section-desktop.svg')] bg-no-repeat bg-right-bottom bg-100">
         {/* <div className="absolute bottom-2 -z-10  bg-[100%] w-[500px] h-[270px] right-0 border bg-black"></div> */}
         <WorksContent />
      </section>
   );
};
