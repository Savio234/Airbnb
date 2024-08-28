import { getCurrentUser } from '@/app/actions';
import { signOut } from '@/auth';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const useValidateLogout = () => {

    const router = useRouter();

    const handleLogout = async () => {
      try {
        // await signOut({redirect: false});
        router.refresh()
      } catch (error: any) {
        console.log(error);
        toast.error('Failed to logout')
      }
    }
  return {
    handleLogout
  }
}

export default useValidateLogout