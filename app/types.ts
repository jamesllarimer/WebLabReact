export interface StaffInfo {
    id: number;
    name: string;
    title: string;
    imgUrl: string;
    imgAlt: string;
}

export interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
}

export interface ModalArgs {
    title: string;
    body: string;
    submitFunction?: () => void;
    cancelFunction?: () => void;
    isModalOpen: boolean;
    toggle: () => void;
    submitText?: string;
    cancelText: string;
}

