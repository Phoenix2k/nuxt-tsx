#!/bin/sh
if [ -f .env ]
then
    cp .env.example .env
    echo "✅ Environment file created\n"
fi
