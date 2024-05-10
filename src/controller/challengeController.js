const { Status } = require("../model/status");

let tempoProva = 30;
let f1 = 2;
let f2 = 3;
let f3 = 5;
let f4 = 8;
let f5 = 10;

class ChallengeController
{
    static async get(req, res)
    {
        const statusDoc = await Status.find();

        console.log(statusDoc)

        if(!statusDoc)
            return res.status(404).send({ error: 'Status not found' });

        const teste = statusDoc.status

        console.log(teste)

        return res.send({ 
            tempoProva, 
            teste,
            f1,
            f2,
            f3,
            f4,
            f5
        });
    }

    static async post(req, res) {

        let statusDoc = await Status.findOne(); 
        if (!statusDoc) {
            statusDoc = new Status({ status: true });
            await statusDoc.save();
        } else {
            statusDoc.status = true; 
            await statusDoc.save();
        }
        
        const {
            tempo_Prova,
            f1_,
            f2_,
            f3_,
            f4_,
            f5_
        } = req.body;

        tempoProva = tempo_Prova;
        f1 = f1_;
        f2 = f2_;
        f3 = f3_;
        f4 = f4_;
        f5 = f5_;
        res.send('Estado da prova atualizado!');
    }

    static async begin(req, res)
    {
        const {
            tempo_Prova,
        } = req.body;

        const statusDoc = await Status.findOneAndUpdate(
            {},
            { status: true}
        )

        tempoProva = tempo_Prova;
        res.send('Valores atualizados!');
    }

    static async end(req, res)
    {
        const statusDoc = await Status.findOneAndUpdate(
            {},
            { status: false}
        )
        res.send('Valores atualizados!');
    }
}

module.exports = ChallengeController;