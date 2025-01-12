import { axiosInstance } from "../services/axios";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

const DeleteUserModal = ({ userId, onUserDeleted, onClose }) => {
  const { isOpen, onOpen } = useDisclosure();
  const [loading, setLoading] = useState(false);

  // Menggunakan useEffect untuk membuka modal saat userId di set
  useEffect(() => {
    // Buka modal jika userId ada
    if (userId) {
      onOpen();
    }
  }, [userId, onOpen]);

  const handleDeleteUser = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.delete(`/users/${userId}`);
      toast.success("Berhasil! User Telah dihapus"); // Menampilkan notifikasi sukses
      console.log("User Telah diHapus:", response.data);

      onUserDeleted(userId); // Panggil callback untuk memberi tahu bahwa task telah dihapus
      onClose(); // Tutup modal setelah berhasil
    } catch (error) {
      console.error("Error deleting task:", error);
      toast.error("Gagal! User Gagal diHapus."); // Menampilkan notifikasi kesalahan
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Modal backdrop="blur" isOpen={!!userId} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Hapus User</ModalHeader>
          <ModalBody>Apakah Kamu yakin ingin dihapus ?</ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button>
            <Button color="primary" onPress={handleDeleteUser} disabled={loading}>
              {loading ? "Deleting..." : "Delete User"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default DeleteUserModal;
