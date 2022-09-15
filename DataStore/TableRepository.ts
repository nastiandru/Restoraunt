import {Schema, model, connect} from 'mongoose';
import Table from '../Models/TableModel';
import {ReservationRepository} from './ReservationRepository';
import Reservation from '../Models/ReservationModel';

export class TableRepository
{
    tableSchema = new Schema<Table>(
        {
            number: {type: Number, required: true},
            seats: {type: Number, required: true},
            status: {type: Number, required: true}
        });

    TableModel = model<Table>('Table', this.tableSchema);

    async populateTables() : Promise<void>
    {
        await connect('mongodb+srv://nastia123:nastia070703@cluster0.eyf7qte.mongodb.net/?retryWrites=true&w=majority');

        const tables = 
        [
            {
                number: 1,
                seats: 4,
                status: 0
            },
            {
                number: 2,
                seats: 4,
                status: 1
            },
            {
                number: 3,
                seats: 6,
                status: 2
            },
            {
                number: 4,
                seats: 8,
                status: 3
            }
        ];

        if(await this.TableModel.countDocuments() === 0)
        {
            await this.TableModel
            .insertMany(tables)
            .then(function()
            {
                console.log("Tables have been populated!")
            }).catch(function(err: any)
            {
                console.log(err);
            });
        }  
    }

    async addTable(table: Table) : Promise<void>
    {
        await connect('mongodb+srv://nastia123:nastia070703@cluster0.eyf7qte.mongodb.net/?retryWrites=true&w=majority');

        await this.TableModel
        .create(table)
        .then(function()
        {
            console.log("Table " + table.number + " has been added!");
        }
        ).catch(function(err)
        {
            console.log(err);
        });
    }

    async deleteTableByNumber(tableNumber: number) : Promise<void>
    {
        await connect('mongodb+srv://nastia123:nastia070703@cluster0.eyf7qte.mongodb.net/?retryWrites=true&w=majority');

        await this.TableModel
        .deleteOne({number: tableNumber})
        .then(function()
        {
            console.log("Table " + tableNumber + " has been deleted!");
        }).catch(function(err)
        {
            console.log(err);
        });
    }

    async getTableByNumber(tableNumber: number) : Promise<Table>
    {
        await connect('mongodb+srv://nastia123:nastia070703@cluster0.eyf7qte.mongodb.net/?retryWrites=true&w=majority');

        let table = await this.TableModel.findOne({tableNumber: tableNumber});
        if (table)
            return table;
        else
            return null as any;
    }

    async getTableById(tableId: string) : Promise<Table>
    {
        await connect('mongodb+srv://username:username123@cluster.itsrg.mongodb.net/RestaurantDb?retryWrites=true&w=majority');

        let table = await this.TableModel.findById(tableId);
        if (table)
            return table;
        else
            return null as any;
    }

    async getTables() : Promise<Table[]>
    {
        await connect('mongodb+srv://nastia123:nastia070703@cluster0.eyf7qte.mongodb.net/?retryWrites=true&w=majority');

        return await this.TableModel.find({});
    }

    async updateTableByNumber(tableNumber:number, table: Table) : Promise<void>
    {
        await connect('mongodb+srv://nastia123:nastia070703@cluster0.eyf7qte.mongodb.net/?retryWrites=true&w=majority');

        let tableToUpdate = await this.TableModel.findOne({number: tableNumber});

        if (tableToUpdate)
        {
            if(table.number)
                tableToUpdate.number = table.number;
            if(table.seats)
                tableToUpdate.seats = table.seats;
            if(table.status)
                tableToUpdate.status = table.status;

            await tableToUpdate.save()
            .then(function()
            {
                console.log("Table " + tableNumber + " has been updated!");
            }).catch(function(err: any)
            {
                console.log(err);
            });
        }
    }

    async getFreeTables(startDateTime : Date, endDateTime: Date, numberOfPeople: number) : Promise<string>
    {
        await connect('mongodb+srv://nastia123:nastia070703@cluster0.eyf7qte.mongodb.net/?retryWrites=true&w=majority');

        
        let reservationRepository = new ReservationRepository();

        let tables = await this.TableModel.find({seats: {$gte: numberOfPeople}});

        let freeTables: Table[] = [];
        for(let i = 0; i < tables.length; i++)
        {
            let table = tables[i];
            let reservations = await reservationRepository.getReservationsByTableId(table._id.toString());
            let isFree = true;
            for(let j = 0; j < reservations.length; j++)
            {
                let reservation = reservations[j];

                if(reservation.startDateTime < endDateTime && reservation.endDateTime > startDateTime)

                    isFree = false;
            }
            if(isFree)
            freeTables.push(table);

        }

    return "przeszło";
    }
}