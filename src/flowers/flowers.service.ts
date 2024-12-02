import { Injectable } from '@nestjs/common';
import { Flower } from './flowers.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class FlowersService {
    constructor(@InjectModel(Flower) private readonly FlowerRepository: typeof Flower) { }

    async create(body) {
        const flower = await this.FlowerRepository.create(body)
        return flower
    }

    async update(id, body) {
        const flower = await this.FlowerRepository.update(body, { where: { id: id.id } })
        return flower
    }

    async findById(id) {
        const flower = await this.FlowerRepository.findOne({ where: { id: id.id } })
        return flower
    }

    async findAll() {
        const flowers = await this.FlowerRepository.findAll()
        return flowers
    }

    async delete(id) {
        return await this.FlowerRepository.destroy({ where: { id: id.id } })
    }

    async getPage(offset, limit) {
        const flowers = await this.FlowerRepository.findAll({
            limit: Number(limit),
            offset: Number(offset)
        })
        return flowers
    }
}
