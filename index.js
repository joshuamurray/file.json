/**
 * Primary module requirements
 */
var fs = require( 'fs' );
var path = require( 'path' );

/**
 * Module File
 * Loade/Saves/Modifies/Creates JSON files
 * @constructor
 */
var File = function() {
    var $this = this;

    /**
     * Creates a new file at the provided path.
     * @param file - filename ( with or without ".json" )
     * @param path - relative path to the file from the requiring module's parent directory
     */
    this.make = function( file, path ){

    }

    /**
     * Loads the contents of a .json file.
     * @param file - filename ( with or without ".json" )
     * @param path - relative path to the file from the requiring module's parent directory
     */
    this.load = function ( file, path ){

    };

    /**
     * Saves the object to a .json file. ( creates file if it doesn't exist, overwrites current contents )
     * @param file - filename ( with or without ".json" )
     * @param data - JSON object to be saved within the file
     * @param path - relative path to the file from the requiring module's parent directory
     */
    this.save = function ( file, data, path ){

    };

    /**
     * Returns the complete path to the file based on provided path.
     * ( Uses requiring module directory, if path is not provided )
     * @param path - relative path to the file from the requiring module's parent directory
     */
    this.path = function( path ){

    };

    /**
     * Saves a value to a specific key within a .json file.
     * @param file - filename ( with or without ".json" )
     * @param key - name of the property which will have its value replaced
     * @param value - the value which will replace the current property's value
     * @param path - relative path to the file from the requiring module's parent directory
     */
    this.push = function( file, property, value, path ){

    };

    /**
     * Extracts the value of property from the file.
     * @param file - filename ( with or without ".json" )
     * @param key - name of the property to retrieve the value from
     * @param path - relative path to the file from the requiring module's parent directory
     */
    this.pull = function( file, property, path ){

    };

    /**
     * Set the options for file loading and saving.
     */
    this.boot = function(){

    };

    $this.boot();
};

/**
 * Construct the module PRIOR to export.
 */
var bootstrap = function(){ /* STUB */ }

/**
 * Execute the module bootstrap method.
 */
bootstrap();

module.exports = File

