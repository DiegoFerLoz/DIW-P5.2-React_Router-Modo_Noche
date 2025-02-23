interface ProfileLineProps {
    field: string;
    value: string;
}

function ProfileLine({field, value}:ProfileLineProps) {
  return (
    <div className="flex py-2">
        <div className="w-1/2">
            <p className="font-bold text-xl">{field}:</p>
        </div>
        <div className="w-1/2">
            <p className="text-xl">{value}</p>
        </div>
        
    </div>
  )
}

export default ProfileLine