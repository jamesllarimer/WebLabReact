import StaffCard from "~/components/staffCard";
import {useState} from "react";
import type {StaffInfo} from "~/types";
import {STAFF_INFO as initialStaff} from "~/data/staffData";
import {CardGroup} from "reactstrap";


export default function StaffSection() {
        const [staff_info, setStaff] = useState<StaffInfo[]>(initialStaff);

        return (
            <div>
                <h3>Staff</h3>
                <CardGroup>
                {staff_info.map((staff) => (
                    <StaffCard key={staff.id} {...staff} />
                ))}
                </CardGroup>
            </div>
        );
}