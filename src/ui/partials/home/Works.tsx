import { WorksContent } from '../../components/works/worksContent';

export const Works = () => {
   return (
      <section className="relative py-20 bg-brightRed bg-[url('./icons/bg-simplify-section-desktop.svg')] bg-no-repeat bg-rb-screen-1200plus bg-bs-1200plus dmd:bg-rb-screen-tablet dmd:bg-bs-tablet">
         <WorksContent />
      </section>
   );
};
