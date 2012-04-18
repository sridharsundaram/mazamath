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
        return player == 'A' ? gameState.moveA : gameState.moveB;
      }
      
      js_sendMove = function(multiple) {
        sendMessage('/move', 'i=' + multiple);
      }
      
      js_getPlayerName = function(player) {
        return player == 'A' ? gameState.nameA : gameState.nameB;
      }
