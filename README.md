# TimerLibrary
Uma simples biblioteca que adiciona duas classes, a classe "Timer" e a classe "Cronometro"

## Usage
### Timer
```
var t = new timer(<função callback para ser chamada quando o timer acabar>,<tempo em segundos>)
t.resume() \\dá play no timer
t.pause() \\Pausa o timer
t.stop() \\Pausa e reseta o timer
```
### Cronometro
```
var c = new cronometro()
c.play() \\Dá play no cronometro
c.pause() \\Para o cronometro
c.reset() \\Reseta o cronometro
c.getTime() \\Retorna um objeto com milisegundos,segundos,minutos,horas e dias
c.getSeconds() \\O mesmo da função anterior, mas tudo em segundos
```
