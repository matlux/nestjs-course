import { Controller, Get } from "@nestjs/common";
import { findAllCryptos } from "../../crypto-compare-service";
import { CryptoPrice} from "../../../src/app/model/crypto-price"


@Controller()
export class CryptoController {

  constructor() { }
  @Get('api/hello-world')
  async helloworld() {
    return "hello World"
  }



  @Get('api/cryptos')
  async findAllCryptoPairs() : Promise<CryptoPrice> {
    return <Promise<CryptoPrice>>findAllCryptos();
  }

}