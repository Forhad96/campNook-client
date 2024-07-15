import ComHeader from "../shared/ComHeader";
import Container from "../shared/Container";
import activitybg from "/vectorSvg/activity.svg";
import wildlife from "/vectorSvg/wildlife.svg";
import hiking from "/vectorSvg/hiking.svg";
import cnoneing from "/vectorSvg/cnoneing.svg";
import bonefire from "/vectorSvg/bonefire.svg";
const Activity = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const activities = [
    {
      name: "Wildlife Watching",
      description: "Explore and observe the beauty of nature and wildlife.",
      image: (
        <svg
          width="108"
          height="108"
          viewBox="0 0 108 108"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.2143 89.2857H2M38.2143 89.2857H106M70.7143 64.9293L61.5116 77.6786L52.1307 63.75H42.7498L28.6785 38.2143L7.57143 89.2857M81.8571 89.2857L70.7143 65.1429M38.2143 39.1712L47.2706 18.7143L66.0714 57.7143M61.4286 46.1316L69.08 33.5714L98.5714 89.2857M56.7857 38.2143L52.1428 43.1667L47.5 38.2143L42.8571 45.6429M46.5714 18.7143V2L61.4286 6.45714L46.5714 13.1429M14.0714 103.214C14.0714 103.214 26.6178 100.893 29.1271 96.25C32.2988 90.3768 24.1085 89.2857 24.1085 89.2857M35.4286 106C35.4286 106 39.1429 103.612 39.1429 96.449C39.1429 94.0612 37.2857 89.2857 37.2857 89.2857"
            stroke="#18472A"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    
    {
      name: "Hiking",
      description: "Discover new trails and enjoy the great outdoors.",
      image: (
        <svg
          width="116"
          height="116"
          viewBox="0 0 116 116"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.3169 27L4.32587 50.749C3.99759 51.9894 3.9163 53.2831 4.08672 54.5553C4.25713 55.8276 4.67588 57.0532 5.31877 58.1615C5.96166 59.2698 6.81595 60.2389 7.83241 61.0127C8.84887 61.7866 10.0074 62.35 11.241 62.6703C13.248 63.207 15.3725 63.0861 17.3068 62.325C19.2411 61.5639 20.8848 60.2022 22 58.437M77 56H57.805L46 46L41 41M77 56C78.3261 56 79.5978 55.4732 80.5355 54.5355C81.4732 53.5978 82 52.3261 82 51C82 49.6739 81.4732 48.4022 80.5355 47.4645C79.5978 46.5268 78.3261 46 77 46M77 56V107M77 46V29M77 46H62.5164C62.5164 46 48.0327 28.4703 41.2447 26.3067H41.1385C39.2828 25.82 37.3297 25.9142 35.5254 26.5773C33.7212 27.2405 32.1465 28.4429 31 30.033M77 107L59 108M77 107L114 114M18 38C16.0264 37.2771 14.3462 35.7683 13.266 33.7489C12.1858 31.7296 11.7776 29.3343 12.1158 27M12 27C12.0562 26.5588 12.1468 26.1228 12.2711 25.6962C12.4556 25.1067 12.6999 24.5383 13 24M31 30C30.6315 30.3109 30.329 30.6639 30 31C29.5309 31.7934 29.1742 32.6642 28.943 33.581L22 58M30.8976 30C31.2236 27.79 30.7657 25.536 29.6025 23.6259C28.4394 21.7157 26.6438 20.2689 24.5248 19.5343C22.4058 18.7997 20.0958 18.8232 17.9923 19.601C15.8889 20.3787 14.1235 21.8619 13 23.7954M45.6933 46L41 59.6276L57.7265 75.1838C58.5195 75.9212 59.1329 76.8211 59.5219 77.8178C59.9108 78.8145 60.0656 79.883 59.9747 80.9451L58.1643 108M21.5045 58C19.8184 63.8919 22.5547 68.6372 26.8036 72.3104C34.7378 79.1504 48 82.2974 48 82.2974V110L21 112L32.9154 89.2522C33.625 88.1386 33.9999 86.864 34 85.5651V78M22 65V84.532L11 113L2 114M55 11.5C55 16.7467 50.7467 21 45.5 21C40.2533 21 36 16.7467 36 11.5C36 6.25329 40.2533 2 45.5 2C50.7467 2 55 6.25329 55 11.5Z"
            stroke="#18472A"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Canoeing",
      description: "Experience the thrill of paddling through scenic waters.",
      image: (
        <svg
          width="112"
          height="115"
          viewBox="0 0 112 115"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 57C30 27 56 2 56 2C56 2 82 29.5 82 57C82 85 56.1655 113 56.1655 113C56.1655 113 37.7146 94.8153 32 70.7455M21 78L32 71L91 37M69 57.5C69 63.8513 63.4036 69 56.5 69C49.5964 69 44 63.8513 44 57.5C44 51.1487 49.5964 46 56.5 46C63.4036 46 69 51.1487 69 57.5ZM18.2296 87.738C19.961 86.6913 21.2246 84.9668 21.7426 82.9438C22.2605 80.9209 21.9903 78.7652 20.9915 76.9509C19.9926 75.1367 18.3469 73.8125 16.4164 73.2698C14.4859 72.727 12.4287 73.0101 10.6973 74.0568L2 79.3188L9.53232 93L18.2296 87.738ZM101.738 40.9432C100.093 41.9899 98.1384 42.273 96.3044 41.7302C94.4704 41.1875 92.907 39.8633 91.9581 38.0491C91.0092 36.2348 90.7525 34.0792 91.2446 32.0562C91.7366 30.0332 92.9371 28.3087 94.5818 27.262L102.844 22L110 35.6812L101.738 40.9432Z"
            stroke="#18472A"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Bonfire",
      description: "Relax and unwind with a cozy campfire experience.",
      image: (
        <svg
          width="97"
          height="98"
          viewBox="0 0 97 98"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M37.2632 4.18044C39.1546 3.77159 40.8244 4.04742 41.8883 5.11142C44.2082 7.43154 42.7798 12.6186 38.6966 16.6972C34.6133 20.7759 29.4316 22.2094 27.1117 19.8892C24.7918 17.5691 26.2202 12.3821 30.3034 8.30345M54 33L95 74M76 57H54M34 12L24 2M27 20.2024L40.7295 33.9315C42.9594 36.1613 47.9446 34.7884 51.8646 30.8638C55.7846 26.9392 57.1623 21.9588 54.9325 19.729L41.2029 6M46 74.8846C46 86.6154 38.6667 96 24 96C11.8511 96 2 88.9615 2 77.2308C2 67.8462 9.33333 65.5 9.33333 58.4615C9.33333 53.7692 6.88889 51.4231 6.88889 51.4231C11.7778 51.4231 21.5556 53.7692 16.6667 70.1923C16.6667 70.1923 26.4444 70.1923 26.4444 58.4615C26.4444 49.0769 14.2222 46.7308 24 35C24 46.7308 46 49.0769 46 74.8846Z"
            stroke="#18472A"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <Container py="10">
          <ComHeader
            head="ACTIVITY"
            dic=" Camp Will Be For You What You Want It To Be."
          />
      <div className=" mt-20 flex justify-between items-center gap-20">
        <div className="w-1/2 ">
          {/* <p className="text-4xl text-brandPrimary font-bold">ACTIVITY</p>
          <h1 className="mb-14 text-xl  text-brandPrimary">
            Camp Will Be For You <br /> What You Want It To Be.
          </h1> */}
          <img src={activitybg} alt="" />
        </div>

        <div className="w-1/2  grid grid-cols-2 gap-10">
          {activities.map((item) => (
            <div key={item.name} className="space-y-3">
              {/* <img src={item.image} alt="" /> */}
              {item.image}
              <h5 className="text-xl font-bold text-brandPrimary">
                {item.name}
              </h5>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
export default Activity;
