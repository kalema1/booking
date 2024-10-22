import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: loginUser, isLoading } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),

    onSuccess: (user) => {
      console.log(user);
      navigate("/");
    },

    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { loginUser, isLoading };
}
