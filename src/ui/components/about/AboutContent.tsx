import { aboutStyle } from '../../styles/aboutStyle';

const { aboutContent, subTitle, text } = aboutStyle();

export const AboutContent = () => {
   return (
      <div className={aboutContent()}>
         <div className="w-[90%]">
            <h2 className={subTitle()}>What's different about Manage?</h2>
         </div>
         <div className="w-[60%]">
            <p className={text()}>
               Manage provides all the functionality your team needs, without
               the complexity. Our software is tailor-made form modern digital
               product teams.
            </p>
         </div>
      </div>
   );
};
