// Simple Game Engine in JavaScript
class Game {
    constructor() {
        this.entities = [];
        this.isRunning = false;
        this.lastTime = 0;
    }

    start() {
        this.isRunning = true;
        this.lastTime = performance.now();
        this.gameLoop();
    }

    stop() {
        this.isRunning = false;
    }

    addEntity(entity) {
        this.entities.push(entity);
    }

    gameLoop() {
        if (!this.isRunning) return;

        const currentTime = performance.now();
        const deltaTime = currentTime - this.lastTime;
        this.lastTime = currentTime;

        this.update(deltaTime);
        this.render();

        requestAnimationFrame(() => this.gameLoop());
    }

    update(deltaTime) {
        for (const entity of this.entities) {
            if (entity.update) {
                entity.update(deltaTime);
            }
        }
    }

    render() {
        // Placeholder for rendering logic
        console.clear();
        console.log('Rendering all entities');
        for (const entity of this.entities) {
            if (entity.render) {
                entity.render();
            }
        }
    }
}

// Example Entity
class Entity {
    constructor(name) {
        this.name = name;
    }

    update(deltaTime) {
        // Update entity logic
        console.log(`Updating ${this.name} with deltaTime ${deltaTime}`);
    }

    render() {
        // Render entity logic
        console.log(`Rendering ${this.name}`);
    }
}

// Usage Example
const game = new Game();
game.addEntity(new Entity('Player'));
game.addEntity(new Entity('Enemy'));
game.start();