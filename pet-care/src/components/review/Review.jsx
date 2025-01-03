import React from "react";
import ImageUser from "../common/ImageUser";
import RatingAvg from "../rating/RatingAvg";
import { UserType } from "../utils/utilities";

const Review = ({ review, userType }) => {
  const ratedDoctor =
    userType === UserType.PATIENT
      ? `당신은 ${review.vetName} 수의사의 진료를 평가하였습니다.`
      : `${review.patientName} 고객이 입력한 리뷰입니다.`;

  return (
    <div className="mb-4">
      <div className="d-flex align-item-center me-5">
        {userType === UserType.VET ? (
          <ImageUser photoUser={review.patientImage} />
        ) : (
          <ImageUser photoUser={review.vetImage} />
        )}
        <div className="ms-4">
          <div>
            <h5 className="title ms-3">
              <RatingAvg rating={review.stars} />
            </h5>
          </div>
          <div className="mt-4">
            <p className="review-text ms-4">{review.comment}</p>
          </div>
          <div>
            <p className="ms-4">{ratedDoctor}</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Review;
