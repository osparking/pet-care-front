import React from "react";
import UseMsgAlerts from "../hooks/UseMsgAlerts";
import { dateTimeFormatter } from "../utils//utilities";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    reason: "",
    pets: [
      {
        name: "",
        type: "",
        color: "",
        breed: "",
        age: "",
      },
    ],
  });

  const dateChanged = (newDate) => {
    setFormData((prevState) => ({ ...prevState, date: newDate }));
  };

  const timeChanged = (newTime) => {
    setFormData((prevState) => ({ ...prevState, time: newTime }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

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

  /**
   * 이 코드는 강사와 다르다. 그러나 index 로 바로 접근하니 보다 효율적일 것임.
   * 동영상 코드는 21:37초에 표시됨.
   */
  const handlePetChange = (index, e) => {
    const { name, value } = e.target;
    const newPets = [...formData.pets];
    newPets[index][name] = value;
    setFormData((prevState) => ({ ...prevState, pets: newPets }));
  };

  const addPet = () => {
    const newPet = {
      name: "",
      type: "",
      color: "",
      breed: "",
      age: "",
    };
    setFormData((prevState) => ({
      ...prevState,
      pets: [...prevState.pets, newPet],
    }));
  };

  const removePet = (index, e) => {
    const newPets = [...formData.pets];
    newPets.splice(index, 1);
    setFormData((prevState) => ({ ...prevState, pets: newPets }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { date, time } = formData;
    const { formattedDate, formattedTime } = dateTimeFormatter(date, time);

    const pets = formData.pets.map((pet) => ({
      name: pet.name,
      type: pet.type,
      color: pet.color,
      breed: pet.breed,
      age: pet.age,
    }));

    const request = {
      appointment: {
        date: formattedDate,
        time: formattedTime,
        reason: formData.reason,
      },
      pets: pets,
    };

    try {
      const response = await bookAppointment(senderId, recipientId, request);
      setSuccessMsg(response.data.message);
      setShowSuccessAlert(true);
    } catch (err) {
      setErrorMsg(err.response.data.message);
      setShowErrorAlert(true);
    }

    const handleReset = () => {
      setFormData({
        date: "",
        time: "",
        reason: "",
        pets: [
          {
            name: "",
            type: "",
            color: "",
            breed: "",
            age: "",
          },
        ],
      });
      setShowSuccessAlert(false);
      setShowErrorAlert(false);
    };
  };

  return <div>BookAppointment</div>;
};

export default BookAppointment;
