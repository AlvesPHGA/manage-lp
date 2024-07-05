import { WorksContent } from '../../components/works/worksContent';

export const Works = () => {
   return (
      <section className="relative py-20 bg-brightRed bg-[url('./icons/bg-simplify-section-desktop.svg')] bg-no-repeat bg-rb-screen-1200plus bg-bs-1200plus dlg:bg-rb-screen-laptop dlg:bg-bs-laptop dmd:bg-rb-screen-tablet dmd:bg-bs-tablet dml:py-10">
         <WorksContent />
      </section>
   );
};
