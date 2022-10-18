import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

interface LoginModalButtonProps {
  onClose?: () => void;
  onOpen?: () => void;
}

type FormModel = {
  question: string;
  email: string;
};

const CustomModalOverlay = () => {
  return <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(5px)" />;
};

export const Pool: FC<LoginModalButtonProps> = ({ onClose, onOpen }) => {
  const {
    isOpen: opened,
    onOpen: open,
    onClose: close,
  } = useDisclosure({ onClose, onOpen });

  const [voted, setVoted] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isValid },
  } = useForm<FormModel>({ mode: "onChange" });

  const onSubmit: SubmitHandler<FormModel> = async (data) => {
    try {
      await axios
        .post(`/api/vote`, {
          email: data.email,
          question: data.question,
        })
        .then(() => {
          setVoted(true);
        });
    } catch (error: any) {
      setError("email", { type: "custom", message: error.response.data });
    }
  };

  return (
    <>
      <div
        className="fixed right-2 bottom-10 flex cursor-pointer items-center gap-2 px-1 text-center md:right-10 md:bottom-28"
        onClick={open}
      >
        <div className="rounded-xl bg-gray-100 px-2 py-0.5 text-lg font-semibold" style={{backgroundColor:"#7c3aed", color:"white"}}>
          Are you interested?<br></br> Take this quick survey
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-14 w-14 rounded-full bg-violet-600 p-2 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
          />
        </svg>
      </div>

      <Modal
        isOpen={opened}
        size="xl"
        onClose={() => {
          close();
        }}
        isCentered
      >
        <CustomModalOverlay />
        <ModalContent
          minHeight={300}
          py={5}
          position="relative"
          bgColor="#001c27"
          color="white"
        >
          <ModalCloseButton _focus={{ outline: "none", shadow: "none" }} />
          <ModalBody
            p={5}
            className="flex items-center justify-center bg-background"
          >
            {voted ? (
              <div className="text-2xl text-custom">Thank you for voting!</div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="text-lg">
                <div className="mb-4 text-lg font-semibold md:text-xl lg:text-2xl">
                  How much capital are you looking to deploy over the next few
                  years in crypto?
                </div>

                <div className="mb-3 text-custom">
                  <input
                    type="radio"
                    className="custom-radio mr-2 h-4 w-4"
                    id="firstChoice"
                    value="firstChoice"
                    {...register("question", { required: true })}
                  />
                  <label className="custom-control-label" htmlFor="firstChoice">
                    $0 - $10,000
                  </label>
                </div>
                <div className="mb-3 text-custom">
                  <input
                    type="radio"
                    className="custom-radio mr-2 h-4 w-4"
                    id="secondChoice"
                    value="secondChoice"
                    {...register("question", { required: true })}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="secondChoice"
                  >
                    $10,000 - $50,000
                  </label>
                </div>
                <div className="mb-3 text-custom">
                  <input
                    type="radio"
                    className="custom-radio mr-2 h-4 w-4"
                    id="thirdChoice"
                    value="thirdChoice"
                    {...register("question", { required: true })}
                  />
                  <label className="custom-control-label" htmlFor="thirdChoice">
                    $50,000 - $250,000
                  </label>
                </div>
                <div className="mb-3 text-custom">
                  <input
                    type="radio"
                    className="custom-radio mr-2 h-4 w-4"
                    id="fourthChoice"
                    value="fourthChoice"
                    {...register("question", { required: true })}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="fourthChoice"
                  >
                    $250,000 +
                  </label>
                </div>

                {watch("question") && (
                  <div className="mt-2 mb-4">
                    <input
                      type="email"
                      className=" block w-80 w-full rounded-lg bg-gray-50 p-2.5  text-sm text-gray-900 focus:ring-blue-500 "
                      id="email"
                      aria-describedby="email"
                      placeholder="Email"
                      {...register("email", {
                        required: "This field is required",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Entered value is not a valid email",
                        },
                      })}
                    />
                    {errors.email && (
                      <small id="email" className="text-red-600">
                        {errors.email.message}
                      </small>
                    )}
                  </div>
                )}

                <input
                  type="submit"
                  className="vote-btn"
                  disabled={!isValid}
                  value="Vote"
                />
              </form>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
