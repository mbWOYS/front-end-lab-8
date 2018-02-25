function showResult(fighter) {
    console.log('Fighter', fighter.getName());
    console.log('- Combat stats:', fighter.getCombatHistory());
    console.log('- Properties:', fighter.getStats());
}

function fighter(object) {
    var stats = object;
    var combatHistory = { wins: 0, loses: 0 };

    function getName() {
        return stats.name;
    }

    function block() {
        return Math.random() >= 0.5;
    }

    function getStats() {
        return stats;
    }

    function getCombatHistory() {
        return combatHistory;
    }

    function fight(defender) {
        if (!defender.block() && defender.getStats().hp) {
            defender.getStats().hp -= object.attack;
            if (defender.getStats().hp <= 0) {
                defender.getStats().hp = 0;
                combatHistory.wins++;
                defender.getCombatHistory().loses++;
            }
            return true;
        }
        
        return false;
    }
    return {
        getName,
        block,
        getStats,
        getCombatHistory,
        fight
    };
}

/**
 * The following code must be valid after implementation!
 */ 

 var fighter1 = fighter({name: 'John', attack: 100, hp: 100});
 var fighter2 = fighter({name: 'Kayn', attack: 50, hp: 300});
 var fighter3 = fighter({name: 'Bill', attack: 40, hp: 100});

 fighter1.fight(fighter2); 
 fighter1.fight(fighter3); 

 showResult(fighter1);


 showResult(fighter2); 


showResult(fighter3);