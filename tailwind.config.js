/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container':'1720px',
      },
      colors: {
        'primary':'#FF6231',
        'BtnC':'#FF6231FD',    
        'secondary':'#888888',
      },
      backgroundImage:{
        'BannerImg':"url('/src/assets/banner.png')",
        'Uipresentaion':"url('/src/assets/Uipresentaion.png')",
        'BgElement':"url('/src/assets/BgElement.png')",
        'TrialBg':"url('/src/assets/Trial-bg.png')",
        'TrialBGFrame':"url('/src/assets/Trial-bg-Frame.png')",
        'PlayBg':"url('/src/assets/PlayBg.png')",
        'FooterBG':"url('/src/assets/FooterBG.png')",
        'FooterCard':"url('/src/assets/FooterCard.png')",
        'Header':"url('/src/assets/Header.png')",
        'PopUp':"url('/src/assets/PopUp.png')",
        'Error':"url('/src/assets/Error.png')",
      }
    },
  },
  plugins: [
   
]
}