export class CreateVehicleDto {
  readonly make: string;
  readonly model: string;
  readonly year: number;
}

export class UpdateVehicleDto {
  readonly make?: string;
  readonly model?: string;
  readonly year?: number;
}