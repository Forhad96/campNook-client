import { ArrowIconLeft, ArrowIconRight } from "../../Icons/Icons";
type TCommonSliderActionProps = {
  pagination?: boolean;
  sliderId: string;
  isBeginning?: boolean;
  isEnd?: boolean;
  wrapperBorder?: boolean;
};
const CommonSliderAction = ({
  pagination,
  sliderId,
  isBeginning,
  isEnd,
  wrapperBorder = false,
}: TCommonSliderActionProps) => {
  return (
    <div
      className={`flex items-center justify-between ${
        wrapperBorder && "border border-[#1F1F1F] rounded-xl p-4 mr-10"
      }`}
    >
      {/* Previous Button */}
      <div
        className={`common-swiper-button-prev-${sliderId} ${
          isBeginning && "hidden"
        } absolute bottom-56 z-10 left-2`}
      >
        <ArrowIconLeft />
      </div>

      {/* Pagination */}
      {pagination && (
        <div
          className={`common-swiper-pagination-${sliderId} mb-1 md:block hidden`}
        ></div>
      )}

      {/* Next Button */}
      <div
        className={`common-swiper-button-next-${sliderId} ${
          isEnd && "hidden"
        } absolute bottom-56 z-10 right-2`}
      >
        <ArrowIconRight />
      </div>
    </div>
  );
};

export default CommonSliderAction;
