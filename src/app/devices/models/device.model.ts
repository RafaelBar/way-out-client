export enum Location {
    HALL = 'Hall',
    LIVINGROOM = 'LivingRoom',
    BATHROOM = 'Bathroom',
    KITCHEN = 'Kitchen'
}

export enum DeviceType {
    DOORSWITCH = 'DoorSwitch', 
    MOTIONDETECTOR = 'MotionDetector', 
    PLUG = 'Plug', 
    SMOKEDETECTOR = 'SmokeDetector',
    THERMOSTAT = 'Thermostat', 
    CAMERA = 'Camera'
}

export class Device{
    Id: string;
    Name: string;
    Location: Location;
    Status: boolean;
    Battery: number;
    DeviceType: DeviceType;
    LastSuccessfulConnection: Date;
}