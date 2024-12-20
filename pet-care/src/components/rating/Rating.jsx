import React from "react";
import UseMsgAlerts from "../hooks/UseMsgAlerts";

const Rating = ({ vetId, onReviewSubmit }) => {
  const [hover, setHover] = useState(null);
  const [review, setReview] = useState({
    rating: null,
    comment: null,
  });

  const {
    successMsg,
    setSuccessMsg,
    errorMsg,
    setErrorMsg,
    showSuccessAlert,
    setShowSuccessAlert,
    showErrorAlert,
    setShowErrorAlert,
  } = UseMsgAlerts();

  const handleInputChange = (e) => {
    const { name, value } = e.target.value;
    setReview((prevState) => ({
      ...prevState,
      name: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addReview(vetId, reviewerId, review);
      setSuccessMsg(response.message);
      setShowSuccessAlert(true);
      if (onReviewSubmit) {
        onReviewSubmit();
      }
    } catch (err) {
      setErrorMsg("오류: " + err.response.data.message);
      setShowErrorAlert(true);
    }
  };

  return (
    <React.Fragment>
      <Form>
        <h3>수의사를 평가한다:</h3>
        <div>
          {[...Array(5)].map((_, index) => {
            const ratingValue = index + 1;
            return (
              <Form.Label key={index}>
                <Form.Check
                  type="radio"
                  name="rading"
                  value={ratingValue}
                  onChange={handleInputChange}
                  checked={review.rating === ratingValue}
                  inline
                />
              </Form.Label>
            );
          })}
        </div>
      </Form>
    </React.Fragment>
  );
};

export default Rating;
