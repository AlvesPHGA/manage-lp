export function Facebook() {
   return (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
         <path
            fill="#FFF"
            d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104A1.102 1.102 0 0018.896 0z"
         />
      </svg>
   );
}

export const Instagram = () => {
   return (
      <img
         className="size-6"
         src="./public/icons/icon-instagram.svg"
         alt="icon instagram"
      />
   );
};

export const Youtube = () => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width={24}
         height={24}
         viewBox="0 0 24 24"
      >
         <path
            fill="#FFF"
            d="M10.333 0c-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm3.701 14.077c-1.752.12-5.653.12-7.402 0C4.735 13.947 4.514 13.018 4.5 10c.014-3.024.237-3.947 2.132-4.077 1.749-.12 5.651-.12 7.402 0 1.898.13 2.118 1.059 2.133 4.077-.015 3.024-.238 3.947-2.133 4.077zM8.667 8.048l4.097 1.949-4.097 1.955V8.048z"
         />
      </svg>
   );
};

export const Twitter = () => {
   return (
      <img
         className="size-6"
         src="./public/icons/icon-twitter.svg"
         alt="icon twitter"
      />
   );
};

export const Pinterest = () => {
   return (
      <img
         className="size-6"
         src="./public/icons/icon-pinterest.svg"
         alt="icon pinterest"
      />
   );
};
