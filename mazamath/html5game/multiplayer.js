      js_getPlayerMe = function() {
        if (gameState.playerA == gameState.me) {
          return 'A';
        } else if (gameState.playerB == gameState.me) {
          return 'B';
        }
        return 'BOTH';
      }
      
      js_isReady = function() {
        return gameState.move_state == MOVE_STATE_READY && 
                   gameState.moveA != null && 
                   gameState.moveB != null;
      }
      
      js_getMove = function(player) {
        if (player == 'A') {
          var move = gameState.moveA;
          gameState.moveA = null;
          return move;
        } else {
          var move = gameState.moveB;
          gameState.moveB = null;
          return move;
        }
      }
      
      js_sendMove = function(multiple) {
        sendMessage('/move', 'i=' + multiple);
      }
      
      js_getPlayerName = function(player) {
        return player == 'A' ? gameState.nameA : gameState.nameB;
      }
