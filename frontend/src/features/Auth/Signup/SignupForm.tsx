import { Button, Input } from '@nextui-org/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../util/valitations';

const formInputStyles = {
    label: 'lg:text-[0.9375rem] lg:py-1.5 text-gray-950 font-semibold',
    input: 'lg:text-medium',
};

interface SignupFormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export default function SignupForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const handleSignup: SubmitHandler<SignupFormData> = () => {};

    return (
        <form onSubmit={handleSubmit(handleSignup)}>
            <div className="flex flex-col gap-5 lg:gap-1">
                <div className="flex flex-col gap-4 md:py-5">
                    <Input
                        type="text"
                        label="First Name"
                        placeholder="Enter your first name"
                        classNames={formInputStyles}
                        {...register('firstName')}
                        errorMessage={errors.firstName?.message}
                        isInvalid={!!errors.firstName?.message}
                    />
                    <Input
                        type="text"
                        label="Last Name"
                        placeholder="Enter your last name"
                        classNames={formInputStyles}
                        {...register('lastName')}
                        errorMessage={errors.lastName?.message}
                        isInvalid={!!errors.lastName?.message}
                    />
                    <Input
                        type="email"
                        label="Email"
                        placeholder="Enter your email"
                        classNames={formInputStyles}
                        {...register('email')}
                        errorMessage={errors.email?.message}
                        isInvalid={!!errors.email?.message}
                    />
                    <Input
                        type="password"
                        label="Password"
                        placeholder="Enter your password"
                        classNames={formInputStyles}
                        {...register('password')}
                        errorMessage={errors.password?.message}
                        isInvalid={!!errors.password?.message}
                    />
                    <Input
                        type="password"
                        label="Confirm Password"
                        placeholder="Enter your password again"
                        classNames={formInputStyles}
                        {...register('confirmPassword')}
                        errorMessage={errors.confirmPassword?.message}
                        isInvalid={!!errors.confirmPassword?.message}
                    />
                </div>
                <Button
                    type="submit"
                    size="lg"
                    radius="sm"
                    className="font-semibold bg-boson-blue lg:hover:opacity-70 lg:transition-all text-gray-100"
                >
                    Signup
                </Button>
            </div>
        </form>
    );
}
