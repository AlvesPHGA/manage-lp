export const ButtonComponent = ({ ...props }) => {
   return (
      <button
         className="text-white font-medium bg-brightRed rounded-full py-3 px-8 shadow-[0_10px_20px_-2px_rgba(242,95,58,0.3)] transition-all hover:opacity-85"
         {...props}
      />
   );
};
