import { InputComponent } from '../form/InputComponent';

export const FormComponent = () => {
   return (
      <form className="space-x-4">
         <InputComponent />
         <button className="border border-brightRed bg-brightRed py-3.5 px-6 rounded-[26px] text-white font-medium hover:text-brightRed hover:bg-transparent transition">
            Go
         </button>
      </form>
   );
};
