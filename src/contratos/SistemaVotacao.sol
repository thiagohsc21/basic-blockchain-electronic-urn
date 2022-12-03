pragma solidity ^0.5.0;

contract SistemaVotacao {

    uint public votosLula = 0;
    uint public votosBolsonaro = 0;
    string public nome = "Sistema Votacao Presidente";

    // recebe o voto do votante e computa na variável respectiva
    function validaVoto(uint _numero) public payable {
        require(_numero == 13 || _numero == 22);
        if(_numero == 13) votosLula++;
        else votosBolsonaro++;
    }

    // getters criados para receber a quantidade de votos convertidos para uma string
    function qntVotosLula() external view returns (string memory) {
        return uint2str(votosLula);
    }

    function qntVotosBolsonaro() external view returns (string memory) {
        return uint2str(votosBolsonaro);
    }

    // retorna aquele candidato com maior quantidade de votos no momento
    function atualVencedor() external view returns (string memory) {
        if(votosLula > votosBolsonaro) return("Lula");
        else if(votosLula < votosBolsonaro) return("Bolsonaro");
        else return("Empatados");
    }

    // função para converter inteiro em string
    function uint2str(uint _i) internal pure returns (string memory _uintAsString) {
        if (_i == 0) {
            return "0";
        }
        uint j = _i;
        uint len;
        while (j != 0) {
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint k = len;
        while (_i != 0) {
            k = k-1;
            uint8 temp = (48 + uint8(_i - _i / 10 * 10));
            bytes1 b1 = bytes1(temp);
            bstr[k] = b1;
            _i /= 10;
        }
        return string(bstr);
    }
}
